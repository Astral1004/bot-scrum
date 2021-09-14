import { ApiProperty } from '@nestjs/swagger';

export class RolesObject {
  @ApiProperty()
  roleId: number;
}

export class CreateUserDto {
  @ApiProperty()
  readonly userName!: string;

  @ApiProperty()
  readonly lastName: string;

  @ApiProperty()
  readonly firstName: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly profileImage?: string;

  @ApiProperty()
  readonly microsoftToken?: string;

  @ApiProperty({
    description: 'Array of user roles',
    minimum: 1,
    type: [RolesObject],
  })
  readonly userRoles!: Array<Record<string, number>>;
}
