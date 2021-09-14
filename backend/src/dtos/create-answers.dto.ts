import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty()
  readonly answer: string;

  @ApiProperty()
  readonly userId: number;

  @ApiProperty()
  readonly questionId: number;

  @ApiProperty()
  readonly formId: number;
}
