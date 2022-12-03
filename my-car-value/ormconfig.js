const dbConfig = {
  synchronize: false
};

switch ( process.env.NODE_ENV ) {
  case 'dev':
    Object.assign( dbConfig, {
      type: 'sqlite',
      database: 'dev-db.sqlite',
      entities: '**/*.entity.js'
    } );
    break;
  case 'test':
    Object.assign( dbConfig, {
      type: 'sqlite',
      database: 'test-db.sqlite',
      entities: '**/*.entity.ts'
    } );
    break;
  case 'prod':
    // Object.assign( dbConfig, {
    //   type: 'sqlite',
    //   database: 'dev-db.sqlite',
    //   entities: '**/*.entity.js'
    // } );
    break;
  default:
    throw new Error( 'Unknown environment' )
}

module.exports = {
  type: 'sqlite',
  database: 'dev-db.sqlite',
  entities: '**/*.entity.js',
  synchronize: false
};
