import { Body, Controller, Post, UseFilters, UseGuards } from '@nestjs/common';
import { GlobalExceptionsFilter } from '../filters/httpExceptionFilter';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotFoundResponse } from '../../dtos/types';
import { JwtAuthGuard } from '../guards/jwtAuth.guard';
import { Answers } from 'src/domain/answerEntity/answer.entity';
import { AnswersService } from 'src/core/services/answers.service';
import { CreateAnswerDto } from 'src/dtos/create-answers.dto';

@Controller('api/answer')
@ApiTags('answer')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'The answer successfully added.',
    type: [Answers],
  })
  @ApiResponse({
    status: 404,
    description: 'Answer find error.',
    type: NotFoundResponse,
  })
  @UseFilters(new GlobalExceptionsFilter())
  create(@Body() dto: CreateAnswerDto) {
    return this.answersService.createAnswers(dto);
  }
}
