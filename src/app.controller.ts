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
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';
import {
  createReportSchema,
  createReportTDO,
  updateReportTDO,
} from './app.dto';
import { ZodValidationPipe } from './validation/validation.pipe';

@Controller('report/:type')
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
  @UsePipes(new ZodValidationPipe(createReportSchema))
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() createReportDTO: createReportTDO,
  ) {
    return this.appService.createReport(type, createReportDTO);
  }

  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDTO: updateReportTDO,
  ) {
    return this.appService.updateReport(type, id, updateDTO);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id);
  }
}
