import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/index';
import { Answers } from 'src/domain/answerEntity/answer.entity';
import { CreateAnswerDto } from 'src/dtos/create-answers.dto';

@Injectable({ scope: Scope.REQUEST })
export class AnswersService {
  constructor(
    @InjectRepository(Answers)
    private answersRepository: Repository<Answers>,
  ) {}

  async createAnswers(dto: CreateAnswerDto): Promise<Answers> {
    const answer = await this.answersRepository.create(dto);
    const result = await this.answersRepository.save(answer);
    return result;
  }
}
