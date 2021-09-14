import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm/index';
import { Expose } from 'class-transformer';
import { BASE } from './types';

export class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  // @Expose({ groups: [BASE] })
  createdDate?: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', nullable: true })
  @Expose({ groups: [BASE] })
  updatedDate?: Date;

  @DeleteDateColumn({ nullable: true })
  @Expose({ groups: [BASE] })
  isDeleted?: Date;
}
