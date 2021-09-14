import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../../domain/userEntity/users.entity';
import { getRepository, Repository } from 'typeorm/index';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as fs from 'fs';
import axios from 'axios';

@Injectable({ scope: Scope.REQUEST })
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find({
      relations: ['userForms', 'userForms.form'],
    });
  }

  async findById(id): Promise<Users> {
    return await this.usersRepository.findOne(id, {
      relations: ['userForms', 'userForms.form'],
    });
  }

  async createUser(dto: CreateUserDto) {
    const userCheck = await getRepository(Users)
      .createQueryBuilder('users')
      .where('"email" = :email', { email: dto.email })
      .getOne();
    if (!userCheck) {
      const user = await this.usersRepository.save(dto);
      await this.getPhoto(dto);
      return this.getJwtToken(user.id);
    } else {
      return this.getJwtToken(userCheck.id);
    }
  }

  async getJwtToken(id) {
    const userInfo = await this.usersRepository.findOne(id);
    return this.jwtService.sign({
      id: userInfo.id,
      userName: userInfo.userName,
      lastName: userInfo.lastName,
      firstName: userInfo.firstName,
      email: userInfo.email,
      role: userInfo.userRoles[0].role.name,
      profileImage: userInfo.profileImage,
      authenticated: true,
    });
  }

  async getPhoto(user) {
    const response = await axios(
      'https://graph.microsoft.com/v1.0/me/photo/$value',
      {
        headers: {
          Authorization: `Bearer ${user.microsoftToken}`,
        },
        responseType: 'arraybuffer',
      },
    );
    const base64String = Buffer.from(response.data).toString('base64');
    const base64Image = base64String.split(';base64,').pop();
    fs.writeFile(
      `assets/${user.profileImage}`,
      base64Image,
      { encoding: 'base64' },
      function (err) {
        console.log('File created');
      },
    );
    return 'success';
  }
}
