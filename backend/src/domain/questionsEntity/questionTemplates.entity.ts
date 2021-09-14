import { Entity } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { Column, ManyToOne, JoinColumn } from 'typeorm/index';
import { Questions } from './questions.entity';
import { Templates } from '../templatesEntity/templates.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('question_templates')
export class QuestionTemplates extends BaseEntity {
  @Column()
  questionId: number;

  @Column()
  templateId: number;

  @ApiProperty({ type: () => [Questions] })
  @ManyToOne(() => Questions, (question) => question.questionTemplate, {
    eager: true,
  })
  @JoinColumn({ name: 'questionId' })
  question!: Questions;

  @ApiProperty({ type: () => [Templates] })
  @ManyToOne(() => Templates, (template) => template.questionTemplate)
  @JoinColumn({ name: 'templateId' })
  template!: Templates;
}
