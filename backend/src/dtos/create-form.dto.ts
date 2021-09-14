import { ApiProperty } from '@nestjs/swagger';

export class PeriodicityObject {
  @ApiProperty()
  type!: string;

  @ApiProperty()
  date!: string;
}
export class UsersObject {
  @ApiProperty()
  userId!: number;
}
export class QuestionObject {
  @ApiProperty()
  name!: string;

  @ApiProperty()
  description!: string;

  @ApiProperty()
  type!: string;
}

export class CreateFormDto {
  @ApiProperty()
  readonly creatorId!: number;

  @ApiProperty()
  readonly name!: string;

  readonly activeStatus: boolean;

  @ApiProperty({
    type: PeriodicityObject,
  })
  readonly periodicity: Record<string, any>;

  @ApiProperty({ type: [UsersObject] })
  readonly users: Array<Record<string, any>>;

  @ApiProperty({ type: [QuestionObject] })
  readonly questions: Array<Record<string, any>>;
}
