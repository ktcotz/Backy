import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ReportType } from './data';

import { Exclude } from 'class-transformer';

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

export class ReportResponse {
  id: string;
  source: string;
  amount: number;
  created_at: Date;

  @Exclude()
  updated_at: Date;
  type: ReportType;

  constructor(partial: Partial<ReportResponse>) {
    Object.assign(this, partial);
  }
}
