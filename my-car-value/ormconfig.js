var dbConfig = {
  synchronize: false,
};

switch ( process.env.NODE_ENV ) {
  case 'dev':
    Object.assign( dbConfig, {
      type: 'sqlite',
      database: 'dev-db.sqlite',
      entities: ['**/*.entity.js'],
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
    break;
  default:
    throw new Error( 'unknown environment' );
}

module.exports = dbConfig;
