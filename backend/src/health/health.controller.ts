import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  TypeOrmHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/health')
@ApiTags('api')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get('readiness')
  @HealthCheck()
  check() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }
  @Get('liveness')
  @HealthCheck()
  checkLiveness() {
    return 'I am liveness';
  }
}
