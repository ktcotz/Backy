import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { data, ReportType } from './data';
import { createReportDTO, updateReportTDO } from './app.dto';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllReports(@Param('type') type: ReportType) {
    const reports = data.reports.filter((report) => report.type === type);

    return {
      type,
      reports,
    };
  }

  @Get(':id')
  getIncomeReport(@Param('id') id: string, @Param('type') type: ReportType) {
    const typeReports = data.reports.filter((report) => report.type === type);

    const report = typeReports.find((report) => report.id === id);

    if (!report) {
      return [];
    }

    return report;
  }

  @Post()
  createReport(
    @Param('type') type: ReportType,
    @Body() createReportDTO: createReportDTO,
  ) {
    const newReport = {
      id: uuid(),
      ...createReportDTO,
      created_at: new Date(),
      updated_at: new Date(),
      type,
    };

    data.reports.push(newReport);

    return newReport;
  }

  @Put(':id')
  updateReport(
    @Param('type') type: ReportType,
    @Param('id') id: string,
    @Body() updateDTO: updateReportTDO,
  ) {
    const typeReports = data.reports.filter((report) => report.type === type);

    const report = typeReports.find((report) => report.id === id);

    if (!report) {
      return [];
    }

    data.reports = data.reports.map((report) =>
      report.id === id ? { ...report, ...updateDTO } : report,
    );

    return data.reports;
  }

  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    const report = data.reports.find((report) => report.id === id);

    if (!report) return [];

    data.reports = data.reports.filter((report) => report.id !== id);

    return report;
  }
}
