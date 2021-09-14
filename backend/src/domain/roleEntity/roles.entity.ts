import { BaseEntity } from '../base.entity';
import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { UserRoles } from './userRoles.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('roles')
export class Roles extends BaseEntity {
  @ApiProperty()
  @Column()
  name: string;

  @OneToMany(() => UserRoles, (userRoles) => userRoles.role, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'roleId' })
  userRoles!: UserRoles[];
}
