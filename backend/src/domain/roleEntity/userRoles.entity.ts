import { BaseEntity } from '../base.entity';
import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Users } from '../userEntity/users.entity';
import { Roles } from './roles.entity';
import { Expose } from 'class-transformer';
import { BASE } from '../types';
import { ApiProperty } from '@nestjs/swagger';

@Entity('userRoles')
export class UserRoles extends BaseEntity {
  @Column()
  @Expose({ groups: [BASE] })
  userId!: number;

  @Column()
  @Expose({ groups: [BASE] })
  roleId!: number;

  @ManyToOne(() => Users, (user) => user.userRoles)
  @JoinColumn({ name: 'userId' })
  user!: Users;

  @ApiProperty({ type: [Roles] })
  @ManyToOne(() => Roles, (roles) => roles.userRoles, { eager: true })
  @JoinColumn({ name: 'roleId' })
  role!: Roles;
}
