import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseEnumPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';
import { CreateReportDTO, UpdateReportDTO } from './app.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('report/:type')
@ApiTags('expenses')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ) {
    return this.appService.getAllReports(type);
  }

  @Get(':id')
  getIncomeReport(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ) {
    return this.appService.getIncomeReport(id, type);
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() createReportDTO: CreateReportDTO,
  ) {
    return this.appService.createReport(type, createReportDTO);
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDTO: UpdateReportDTO,
  ) {
    return this.appService.updateReport(type, id, updateDTO);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id);
  }
}
