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
import { ReportType } from './../data';
import {
  CreateReportDTO,
  ReportResponse,
  UpdateReportDTO,
} from './dto/report.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReportService } from './report.service';

@Controller('report/:type')
@ApiTags('expenses')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('')
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponse[] {
    return this.reportService.getAllReports(type);
  }

  @Get(':id')
  getIncomeReport(
    @Param('id', ParseUUIDPipe) id: string,
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponse | null {
    return this.reportService.getIncomeReport(id, type);
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() createReportDTO: CreateReportDTO,
  ): ReportResponse {
    return this.reportService.createReport(type, createReportDTO);
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDTO: UpdateReportDTO,
  ): ReportResponse[] | null {
    return this.reportService.updateReport(type, id, updateDTO);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string): ReportResponse | null {
    return this.reportService.deleteReport(id);
  }
}
