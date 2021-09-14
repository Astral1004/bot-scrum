import {
  Entity,
  Column,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { BaseEntity } from '../base.entity';
import { FormQuestions } from './formQuestions.entity';
import { UserForms } from '../userEntity/userForms.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('form')
export class Forms extends BaseEntity {
  @ApiProperty()
  @Column()
  creatorId: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  periodicityType: string;

  @ApiProperty()
  @CreateDateColumn({ nullable: true, type: 'timestamp' })
  periodicityDate: Date;

  @ApiProperty()
  @Column({ default: true })
  activeStatus: boolean;

  @ApiProperty({ type: () => [FormQuestions] })
  @OneToMany(() => FormQuestions, (formQuestions) => formQuestions.form, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ referencedColumnName: 'formId' })
  formQuestions!: FormQuestions[];

  @ApiProperty({ type: () => [UserForms] })
  @OneToMany(() => UserForms, (userForms) => userForms.form, {
    cascade: true,
  })
  @JoinColumn({ referencedColumnName: 'formId' })
  userForms!: UserForms[];
}
