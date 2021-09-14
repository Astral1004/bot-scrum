import { Entity, Column, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from '../base.entity';
import { UserRoles } from '../roleEntity/userRoles.entity';
import { UserForms } from './userForms.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class Users extends BaseEntity {
  @ApiProperty()
  @Column()
  lastName: string;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  userName: string;

  @ApiProperty()
  @Column({ nullable: true })
  profileImage: string;

  @ApiProperty({ type: [UserRoles] })
  @OneToMany(() => UserRoles, (userRoles) => userRoles.user, {
    eager: true,
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'userId' })
  userRoles!: UserRoles[];

  @ApiProperty({ type: UserForms })
  @OneToMany(() => UserForms, (userForms) => userForms.user, {
    cascade: true,
  })
  @JoinColumn({ referencedColumnName: 'userId' })
  userForms!: UserForms[];
}
