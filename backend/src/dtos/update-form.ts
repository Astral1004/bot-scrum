import { ApiProperty } from '@nestjs/swagger';

export class UpdateFormDto {
  @ApiProperty()
  readonly activeStatus: boolean;
}
