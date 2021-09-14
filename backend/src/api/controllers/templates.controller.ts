import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  Delete,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { TemplateService } from 'src/core/services/templates.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTemplateDto } from 'src/dtos/create-template.dto';
import { NotFoundResponse } from '../../dtos/types';
import { GlobalExceptionsFilter } from '../filters/httpExceptionFilter';
import { Templates } from 'src/domain/templatesEntity/templates.entity';
@Controller('api/template')
@ApiTags('template')
@UseInterceptors(ClassSerializerInterceptor)
export class TemplatesController {
  constructor(private readonly templatesService: TemplateService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The templates will find successfully.',
    type: [Templates],
  })
  @ApiResponse({
    status: 404,
    description: 'Templates find error.',
    type: NotFoundResponse,
  })
  @UseFilters(new GlobalExceptionsFilter())
  async findAllQuestions() {
    const result = await this.templatesService.findAll();
    return result;
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'The template will find successfully.',
    type: [Templates],
  })
  @ApiResponse({
    status: 404,
    description: 'Template find error.',
    type: NotFoundResponse,
  })
  @UseFilters(new GlobalExceptionsFilter())
  async findTemplateByCreatorId(@Param('id') id: number) {
    const result = await this.templatesService.findTemplateCreatorId(id);
    return result;
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The template successfully added.',
    type: [Templates],
  })
  @ApiResponse({
    status: 404,
    description: 'Template find error.',
    type: NotFoundResponse,
  })
  @UseFilters(new GlobalExceptionsFilter())
  async create(@Body() dto: CreateTemplateDto) {
    const result = await this.templatesService.createTemplate(dto);
    return result;
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Templates successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Templates deleted error',
    type: NotFoundResponse,
  })
  @UseFilters(new GlobalExceptionsFilter())
  async deleteTemplateById(@Param('id') id: number) {
    const result = await this.templatesService.delete(id);
    return result;
  }
}
