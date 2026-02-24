import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateUserPhotoDto {
  @ApiProperty({ example: 1 })
    @IsOptional()
  user_id: number;
}