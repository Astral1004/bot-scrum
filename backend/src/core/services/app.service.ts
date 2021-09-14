import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getJsonVersion() {
    return {
      hash: this.configService.get('COMMIT_HASH'),
      branch: this.configService.get('BRANCH_NAME'),
      buildDate: this.configService.get('BUILD_DATE'),
      hashKapitan: this.configService.get('CI_COMMIT_SHA'),
    };
  }
}
