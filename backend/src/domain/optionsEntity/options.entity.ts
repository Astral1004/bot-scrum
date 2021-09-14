import { BaseEntity } from '../base.entity';
import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Questions } from '../questionsEntity/questions.entity';
import { JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm/index';

@Entity('option')
export class Options extends BaseEntity {
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @PrimaryColumn()
  questionId: number;

  @ApiProperty()
  @ManyToOne(() => Questions, (question) => question.options)
  @JoinColumn({ name: 'questionId' })
  question: Questions;
}
