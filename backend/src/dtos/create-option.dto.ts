import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @ApiProperty()
  readonly questionId: number;

  @ApiProperty()
  readonly name: string;
}
