type DataReport = {
  id: string;
  source: string;
  amount: number;
  created_at: Date;
  updated_at: Date;
  type: ReportType;
};

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

type Data = {
  reports: DataReport[];
};

export const data: Data = {
  reports: [
    {
      id: 'uuid',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid',
      source: 'Food',
      amount: 2000,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
