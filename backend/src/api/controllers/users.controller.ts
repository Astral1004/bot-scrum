import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UsersService } from '../../core/services/users.service';
import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Users } from '../../domain/userEntity/users.entity';
import { NotFoundResponse } from '../../dtos/types';
import { JwtAuthGuard } from '../guards/jwtAuth.guard';
import { Observable, of } from 'rxjs';
import { join } from 'path';

@Controller('api/user')
@ApiTags('user')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'The users will find successfully.',
    type: [Users],
  })
  @ApiResponse({
    status: 404,
    description: 'User find error.',
    type: NotFoundResponse,
  })
  findAllUser() {
    return this.usersService.findAll();
  }

  @Get('/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @ApiResponse({
    status: 200,
    description: 'The users will find successfully.',
    type: Users,
  })
  @ApiResponse({
    status: 404,
    description: 'User find error.',
    type: NotFoundResponse,
  })
  findUser(@Param('id') id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The users has been successfully created. Return JWT TOKEN',
    type: 'string',
  })
  @ApiResponse({
    status: 404,
    description: 'User adding error.',
    type: NotFoundResponse,
  })
  @ApiBody({ type: CreateUserDto })
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get('/profile-image/:imagename')
  @ApiResponse({
    status: 200,
    description: 'Returns the user avatar',
    type: Users,
  })
  @ApiResponse({
    status: 404,
    description: 'User avatar not found.',
    type: NotFoundResponse,
  })
  findProfileImage(
    @Param('imagename') imagename: string,
    @Res() res,
  ): Observable<Record<string, unknown>> {
    return of(
      res.sendFile(join(process.cwd(), process.env.PATH_ASSETS + imagename)),
    );
  }
}
