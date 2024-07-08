import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SummaryModule } from './summary/summary.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [ConfigModule.forRoot(), SummaryModule, ReportModule],
})
export class AppModule {}
