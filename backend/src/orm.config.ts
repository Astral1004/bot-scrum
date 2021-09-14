import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

let ssl = false;
let extra = {};

if (
  process.env.BUILD_ENV !== 'develop' &&
  JSON.parse(process.env.CONNECT_SSL)
) {
  ssl = JSON.parse(process.env.CONNECT_SSL);
  extra = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

export const TypeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST') || 'localhost',
  port: configService.get('POSTGRES_PORT') || 5432,
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DATABASE'),
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  ssl: ssl,
  extra: extra,
  dropSchema: false,
  synchronize: true,
  migrationsRun: true,
  logging: true,
  migrations: [__dirname + '/**/migrations/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/data/entities',
    migrationsDir: 'data/migrations',
  },
});
