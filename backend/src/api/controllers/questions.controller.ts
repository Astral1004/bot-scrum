import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { QuestionsService } from '../../core/services/questions.service';
import { CreateQuestionDto } from '../../dtos/create-question.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from '../../dtos/types';
import { Questions } from '../../domain/questionsEntity/questions.entity';
import { JwtAuthGuard } from '../guards/jwtAuth.guard';

@Controller('api/question')
@ApiTags('question')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The question will find successfully.',
    type: [Questions],
  })
  @ApiResponse({
    status: 404,
    description: 'Form find error.',
    type: NotFoundResponse,
  })
  findAllQuestions() {
    return this.questionsService.findAll();
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The question successfully added.',
    type: [Questions],
  })
  @ApiResponse({
    status: 404,
    description: 'Form find error.',
    type: NotFoundResponse,
  })
  create(@Body() dto: CreateQuestionDto) {
    return this.questionsService.createQuestion(dto);
  }
}
