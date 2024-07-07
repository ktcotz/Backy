import { z } from 'zod';

export const createReportSchema = z.object({
  source: z.string(),
  amount: z.number(),
});

export type createReportTDO = z.infer<typeof createReportSchema>;

export type updateReportTDO = Partial<createReportTDO>;
