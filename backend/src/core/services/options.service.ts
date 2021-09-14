import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Options } from '../../domain/optionsEntity/options.entity';
import { Repository } from 'typeorm/index';
import { CreateOptionDto } from '../../dtos/create-option.dto';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Options)
    private optionsRepository: Repository<Options>,
  ) {}

  async findAll(): Promise<Options[]> {
    return await this.optionsRepository.find();
  }

  async createOption(dto: CreateOptionDto): Promise<Options> {
    return this.optionsRepository.save(dto);
  }
}
