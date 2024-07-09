import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SummaryModule,
    ReportModule,
    UserModule,
    PrismaModule,
  ],
})
export class AppModule {}
