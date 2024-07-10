import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class SignupDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Kamil',
    required: true,
  })
  name: string;

  @Matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
    message: 'Phone must be a valid phone number!',
  })
  @ApiProperty({
    example: '123456789',
    required: true,
  })
  phone: string;

  @IsEmail()
  @ApiProperty({
    example: 'kam.nas21@wp.pl',
    required: true,
  })
  email: string;

  @IsString()
  @MinLength(5)
  @ApiProperty({
    example: '123456',
    required: true,
  })
  password: string;
}

export class SignInDTO {
  @IsEmail()
  @ApiProperty({
    example: 'kam.nas21@wp.pl',
    required: true,
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: '123456',
    required: true,
  })
  password: string;
}
