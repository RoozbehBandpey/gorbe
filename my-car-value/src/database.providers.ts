import { join } from 'path';
import { DataSource } from 'typeorm';

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

export default new DataSource({
  type: 'sqlite',
  database: 'dev-db.sqlite',
  entities: ['**/*.entity.js'],
  synchronize: true,
});