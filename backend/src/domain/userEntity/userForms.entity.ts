import { BaseEntity } from '../base.entity';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from './users.entity';
import { Forms } from '../formEntity/forms.entity';
import { Expose } from 'class-transformer';
import { BASE } from '../types';
import { ApiProperty } from '@nestjs/swagger';

@Entity('userForms')
export class UserForms extends BaseEntity {
  @Column()
  @Expose({ groups: [BASE] })
  userId: number;

  @Column()
  @Expose({ groups: [BASE] })
  formId: number;

  @ApiProperty({ type: () => Forms })
  @ManyToOne(() => Forms, (form) => form.userForms, {})
  @JoinColumn({ name: 'formId' })
  form!: Forms;

  @ApiProperty({ type: () => Users })
  @ManyToOne(() => Users, (user) => user.userForms, {})
  @JoinColumn({ name: 'userId' })
  user!: Users;
}
