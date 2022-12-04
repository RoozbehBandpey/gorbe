import { DataSource, DataSourceOptions } from 'typeorm';

const dbConfig = {
  type: 'sqlite',
  synchronize: false,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations'
  }
};

switch ( process.env.NODE_ENV ) {
  case 'dev':
    Object.assign( dbConfig, {
      type: 'sqlite',
      database: 'dev-db.sqlite',
      entities: ['dist/**/*.entity.js'],
    } );
    break;
  case 'test':
    Object.assign( dbConfig, {
      type: 'sqlite',
      database: 'test-db.sqlite',
      entities: ['**/*.entity.ts'],
    } );
    break;
    case 'prod':
    Object.assign( dbConfig, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['dist/**/*.entity.js'],
    } );
    break;
  default:
    throw new Error( 'Unknown environment' );
}

export const connectionSource = new DataSource(dbConfig as DataSourceOptions);