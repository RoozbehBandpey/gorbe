import { join } from 'path';
import { DataSource } from 'typeorm';
import { Report } from './reports/reports.entity';
import { User } from './users/users.entity';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource(
//         process.env.NODE_ENV == 'dev' ?
//         {
//         type: 'sqlite',
//         database: 'dev-db.sqlite',
//         entities: ['**/*.entity.js'],
//         synchronize: true,
//         }
//       :
//       {
//         type: 'sqlite',
//         database: 'test-db.sqlite',
//         entities: ['./**/*.entity.ts'],
//         synchronize: true,
//       }
//       );

//       return dataSource.initialize();
//     },
//   },
// ];

export const connectionSource = new DataSource({
  type: 'sqlite',
  database: 'dev-db.sqlite',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  // entities: [User, Report],
});