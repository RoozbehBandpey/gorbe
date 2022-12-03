import { DataSource } from 'typeorm';
import { Report } from './reports.entity';

export const reportProviders = [
  {
    provide: 'REPORT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Report),
    inject: ['DATA_SOURCE'],
  },
];