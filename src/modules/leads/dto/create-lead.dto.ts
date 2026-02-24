import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class CreateLeadDto {
  @ApiProperty({ example: 'Ali Valiyev' })
  @IsOptional()
  full_name: string;

  @ApiProperty({ example: '+998901234567' })
    @IsOptional()
  phone_number: string;

  @ApiProperty({ example: 'Toshkent shahar, Chilonzor' })
    @IsOptional()
  address: string;
}