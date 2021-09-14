import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { QuestionTemplates } from '../questionsEntity/questionTemplates.entity';

import { CreateDateColumn } from 'typeorm/index';
@Entity('template')
export class Templates extends BaseEntity {
  @Column()
  creatorId: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  type: string;

  @CreateDateColumn({
    type: 'timestamp',
    nullable: true,
  })
  date?: Date;

  @OneToMany(
    () => QuestionTemplates,
    (questionTemplates) => questionTemplates.template,
    {
      eager: true,
      cascade: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'templateId' })
  questionTemplate!: QuestionTemplates[];
}
