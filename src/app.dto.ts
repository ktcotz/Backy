import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateReportDTO {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    example: 45,
    required: true,
  })
  amount: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Salary',
    required: true,
  })
  source: string;
}

export class UpdateReportDTO {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    example: 45,
    required: true,
  })
  amount: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Salary',
    required: true,
  })
  source: string;
}
