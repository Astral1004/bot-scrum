import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers/controllers.module';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [ControllersModule, FiltersModule],
  controllers: [],
  providers: [],
  exports: [ControllersModule, FiltersModule],
})
export class ApiModule {}
