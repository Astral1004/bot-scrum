import { BaseEntity } from '../base.entity';
import { Entity, Column, JoinColumn, OneToMany } from 'typeorm';
import { FormQuestions } from '../formEntity/formQuestions.entity';
import { QuestionTemplates } from './questionTemplates.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Options } from '../optionsEntity/options.entity';

export enum questionType {
  public = 0,
  private = 1,
  privateAnonymous = 2,
}

@Entity('question')
export class Questions extends BaseEntity {
  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: questionType,
    default: questionType.public,
  })
  type: questionType;

  @ApiProperty({ type: () => [FormQuestions] })
  @OneToMany(() => FormQuestions, (formQuestions) => formQuestions.question, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'questionId' })
  formQuestions!: FormQuestions[];

  @ApiProperty({ type: () => [QuestionTemplates] })
  @OneToMany(
    () => QuestionTemplates,
    (questionTemplate) => questionTemplate.question,
    {
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'questionId' })
  questionTemplate!: QuestionTemplates[];

  @ApiProperty()
  @OneToMany(() => Options, (option) => option.question, { eager: true })
  options: Options[];
}
