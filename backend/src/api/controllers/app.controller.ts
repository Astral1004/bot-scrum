import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../core/services/app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/version.json')
@ApiTags('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getJSON() {
    return this.appService.getJsonVersion();
  }
}
