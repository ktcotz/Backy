import { Injectable } from '@nestjs/common';
import { data, ReportType } from './data';
import { createReportTDO, updateReportTDO } from './app.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    const reports = data.reports.filter((report) => report.type === type);

    return {
      type,
      reports,
    };
  }

  getIncomeReport(id: string, type: ReportType) {
    const typeReports = data.reports.filter((report) => report.type === type);

    const report = typeReports.find((report) => report.id === id);

    if (!report) {
      return [];
    }

    return report;
  }

  createReport(type: ReportType, createReportDTO: createReportTDO) {
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

  updateReport(type: ReportType, id: string, updateTDO: updateReportTDO) {
    const typeReports = data.reports.filter((report) => report.type === type);

    const report = typeReports.find((report) => report.id === id);

    if (!report) {
      return [];
    }

    data.reports = data.reports.map((report) =>
      report.id === id ? { ...report, ...updateTDO } : report,
    );

    return data.reports;
  }

  deleteReport(id: string) {
    const report = data.reports.find((report) => report.id === id);

    if (!report) return [];

    data.reports = data.reports.filter((report) => report.id !== id);

    return report;
  }
}
