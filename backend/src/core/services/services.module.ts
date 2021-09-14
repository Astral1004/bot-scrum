import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users.service';
import { DataModule } from '../../data/data.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FormsService } from './forms.service';
import { QuestionsService } from './questions.service';
import { AnswersService } from './answers.service';
import { TemplateService } from './templates.service';
import { OptionsService } from './options.service';

@Module({
  imports: [
    DataModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY_JWT'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [
    AppService,
    UsersService,
    FormsService,
    QuestionsService,
    AnswersService,
    OptionsService,
    TemplateService,
  ],
  exports: [
    AppService,
    UsersService,
    FormsService,
    QuestionsService,
    TemplateService,
    JwtModule,
    AnswersService,
    OptionsService,
  ],
})
export class ServicesModule {}
