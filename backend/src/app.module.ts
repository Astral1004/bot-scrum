import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './data/data.module';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health/health.controller';
import { GuardsModule } from './api/guards/guards.module';

@Module({
  imports: [
    ApiModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
    }),
    DataModule,
    TerminusModule,
    GuardsModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
