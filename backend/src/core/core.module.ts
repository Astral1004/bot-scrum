import { Module } from '@nestjs/common';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [],
  providers: [],
  exports: [ServicesModule],
})
export class CoreModule {}
