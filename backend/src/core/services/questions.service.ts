import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from '../../domain/questionsEntity/questions.entity';
import { Repository } from 'typeorm/index';
import { CreateQuestionDto } from '../../dtos/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Questions)
    private questionsRepository: Repository<Questions>,
  ) {}

  async findAll(): Promise<Questions[]> {
    return await this.questionsRepository.find();
  }

  async createQuestion(dto: CreateQuestionDto): Promise<Questions> {
    return this.questionsRepository.save(dto);
  }
}
