export type createReportDTO = {
  source: string;
  amount: number;
};

export type updateReportTDO = Partial<createReportDTO>;
