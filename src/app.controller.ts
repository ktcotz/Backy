import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';
import { createReportDTO, updateReportTDO } from './app.dto';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllReports(@Param('type') type: ReportType) {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getIncomeReport(@Param('id') id: string, @Param('type') type: ReportType) {
    return this.appService.getIncomeReport(id, type);
  }

  @Post()
  createReport(
    @Param('type') type: ReportType,
    @Body() createReportDTO: createReportDTO,
  ) {
    return this.appService.createReport(type, createReportDTO);
  }

  @Put(':id')
  updateReport(
    @Param('type') type: ReportType,
    @Param('id') id: string,
    @Body() updateDTO: updateReportTDO,
  ) {
    return this.appService.updateReport(type, id, updateDTO);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}
