import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateDirectionDoctorDto {
  @ApiProperty({ example: 1 })
  @IsString()
  doctors_id?: number;

  @ApiProperty({ example: 1 })
  @IsString()
  direction_id?: number;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
@IsOptional()
  photo?: any;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
@IsOptional()
  video?: any;
}
