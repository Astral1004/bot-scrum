import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FormsService } from '../../core/services/forms.service';
import { CreateFormDto } from '../../dtos/create-form.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from '../../dtos/types';
import { Forms } from '../../domain/formEntity/forms.entity';
import { JwtAuthGuard } from '../guards/jwtAuth.guard';
import { UpdateFormDto } from '../../dtos/update-form';

@Controller('api/form')
@ApiTags('form')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class FormsController {
  constructor(private readonly formsService: FormsService) {}

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'The form will find successfully.',
    type: [Forms],
  })
  @ApiResponse({
    status: 404,
    description: 'Form find error.',
    type: NotFoundResponse,
  })
  findFormById(@Param('id') id: number) {
    return this.formsService.findForm(id);
  }

  @Get('/creator/:id')
  @ApiResponse({
    status: 200,
    description: 'Poll successfully added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Form creation error',
    type: NotFoundResponse,
  })
  findFormByCreatorId(@Param('id') id: number) {
    return this.formsService.findFormsCreatorId(id);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The forms will find successfully.',
    type: Forms,
  })
  @ApiResponse({
    status: 404,
    description: 'Forms find error.',
    type: NotFoundResponse,
  })
  findAllForms() {
    return this.formsService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Poll successfully added.',
  })
  @ApiResponse({
    status: 404,
    description: 'Form creation error',
    type: NotFoundResponse,
  })
  create(@Body() dto: CreateFormDto) {
    return this.formsService.createForm(dto);
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Poll successfully deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Form creation error',
    type: NotFoundResponse,
  })
  deleteFormById(@Param('id') id: number) {
    return this.formsService.delete(id);
  }

  @Put('/:id')
  updateForm(@Param('id') id: number, @Body() updateFormDto: UpdateFormDto) {
    return this.formsService.update(id, updateFormDto);
  }
}
