import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'dev-db.sqlite',
        entities: [
          join(__dirname, '**', '*.entity.{ts,js}')
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];