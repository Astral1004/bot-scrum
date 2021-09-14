import { BaseEntity } from '../base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Forms } from './forms.entity';
import { Questions } from '../questionsEntity/questions.entity';
import { Expose } from 'class-transformer';
import { FORM_QUESTION } from '../types';
import { ApiProperty } from '@nestjs/swagger';

@Entity('form_question')
export class FormQuestions extends BaseEntity {
  @Column()
  @Expose({ groups: [FORM_QUESTION] })
  formId?: number;

  @Column()
  @Expose({ groups: [FORM_QUESTION] })
  questionId: number;

  @ApiProperty()
  @Column({ default: 0 })
  orderNumber: number;

  @ApiProperty({ type: () => [Forms] })
  @ManyToOne(() => Forms, (form) => form.formQuestions)
  @JoinColumn({ name: 'formId' })
  form!: Forms;

  @ApiProperty({ type: () => [Questions] })
  @ManyToOne(() => Questions, (question) => question.formQuestions, {
    eager: true,
  })
  @JoinColumn({ name: 'questionId' })
  question!: Questions;
}
