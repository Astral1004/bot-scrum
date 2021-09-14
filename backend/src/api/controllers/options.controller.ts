import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from '../../dtos/types';
import { Questions } from '../../domain/questionsEntity/questions.entity';
import { JwtAuthGuard } from '../guards/jwtAuth.guard';
import { OptionsService } from '../../core/services/options.service';
import { CreateOptionDto } from '../../dtos/create-option.dto';

@Controller('api/option')
@ApiTags('option')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The option will find successfully.',
    type: [Questions],
  })
  @ApiResponse({
    status: 404,
    description: 'Option find error.',
    type: NotFoundResponse,
  })
  findAllOptions() {
    return this.optionsService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The option successfully added.',
    type: [Questions],
  })
  @ApiResponse({
    status: 404,
    description: 'Option find error.',
    type: NotFoundResponse,
  })
  create(@Body() dto: CreateOptionDto) {
    return this.optionsService.createOption(dto);
  }
}
