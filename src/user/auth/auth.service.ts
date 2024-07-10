import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { SignInDTO, SignupDTO } from '../dtos/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { UserType } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup({ email, password, name, phone }: SignupDTO) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new ConflictException();
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        phone,
        password: hashedPassword,
        user_type: UserType.BUYER,
      },
    });

    const token = await this.generateJWT(email, user.id);

    return { access_token: token };
  }

  async signin({ email, password }: SignInDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new HttpException('Invalid credentials', 400);
    }

    const hashedPassword = user.password;

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      throw new HttpException('Invalid credentials', 400);
    }

    const token = await this.generateJWT(email, user.id);

    return token;
  }

  private async generateJWT(email: string, id: number) {
    const token = jwt.sign(
      { id, email },
      process.env.JSON_SECRET_TOKEN as string,
      {
        expiresIn: 360000,
      },
    );

    return token;
  }
}
