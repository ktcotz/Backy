import { Injectable } from '@nestjs/common';
import { data, ReportType } from './../data';
import {
  CreateReportDTO,
  ReportResponse,
  UpdateReportDTO,
} from './dto/report.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ReportService {
  getAllReports(type: ReportType): ReportResponse[] {
    const reports = data.reports.filter((report) => report.type === type);

    return reports;
  }

  getIncomeReport(id: string, type: ReportType): ReportResponse | null {
    const typeReports = data.reports.filter((report) => report.type === type);

    const report = typeReports.find((report) => report.id === id);

    if (!report) {
      return null;
    }

    return new ReportResponse(report);
  }

  createReport(
    type: ReportType,
    createReportDTO: CreateReportDTO,
  ): ReportResponse {
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
  UpdateReportDTO;
  updateReport(
    type: ReportType,
    id: string,
    updateTDO: UpdateReportDTO,
  ): ReportResponse[] | null {
    const typeReports = data.reports.filter((report) => report.type === type);

    const report = typeReports.find((report) => report.id === id);

    if (!report) {
      return null;
    }

    data.reports = data.reports.map((report) =>
      report.id === id ? { ...report, ...updateTDO } : report,
    );

    return data.reports;
  }

  deleteReport(id: string): ReportResponse | null {
    const report = data.reports.find((report) => report.id === id);

    if (!report) return null;

    data.reports = data.reports.filter((report) => report.id !== id);

    return report;
  }
}
