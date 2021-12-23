import { TypeOrmModule } from '@nestjs/typeorm';
// import { join } from 'path';

export default {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5434,
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'unification',
  // entities: [process.env.DB_ENTITIES || 'dist/**/*.entity.js'],
  // autoLoadEntities: true,
  // synchronize: false,
  // dropSchema: false,
  // migrationsRun: true,
  // logging: true,
  // logger: 'advanced-console',
  // entityPrefix: 'tb_',
  /* migrations: [
    join(__dirname, process.env.DB_MIGRATIONS || '../migrations/*{.ts,.js}'),
  ],
  cli: {
    migrationsDir: process.env.DB_ENTITIES_DIR || './src/migrations',
  }, */
} as TypeOrmModule;
