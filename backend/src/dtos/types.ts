import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty()
  status: number;

  @ApiProperty()
  success: boolean;

  @ApiProperty()
  error: string;

  @ApiProperty()
  message: string;
}
