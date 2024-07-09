import { ConflictException, Injectable } from '@nestjs/common';
import { SignupDTO } from '../dtos/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup({ email }: SignupDTO) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new ConflictException();
    }

    return { userExists };
  }
}
