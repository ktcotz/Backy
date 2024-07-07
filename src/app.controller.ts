import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { data, ReportType } from './data';

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
  getIncomeReport(@Param('id') id: string): any {
    return id;
  }

  @Post()
  createReport() {
    return 'Create report';
  }

  @Put(':id')
  updateReport() {
    return 'Update report';
  }

  @Delete(':id')
  deleteReport() {
    return 'Delete report';
  }
}
