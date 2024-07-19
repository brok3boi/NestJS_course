import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class UserResponse {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  email: string;
}

export class AuthUserResponce {
  @ApiProperty()
  user: UserResponse;
  @ApiProperty()
  @IsString()
  token: string;
}
