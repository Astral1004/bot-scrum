import { BaseEntity } from '../base.entity';
import { Entity, Column } from 'typeorm';

@Entity('answer')
export class Answers extends BaseEntity {
  @Column()
  answer: string;

  @Column()
  userId: number;

  @Column()
  formId: number;

  @Column()
  questionId: number;
}
