import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CoreModule } from '../../core/core.module';
import { UsersController } from './users.controller';
import { FormsController } from './forms.controller';
import { QuestionsController } from './questions.controller';
import { AnswersController } from './answers.controller';
import { TemplatesController } from './templates.controller';
import { OptionsController } from './options.controller';

@Module({
  imports: [CoreModule],
  controllers: [
    AppController,
    UsersController,
    FormsController,
    QuestionsController,
    AnswersController,
    TemplatesController,
    OptionsController,
  ],
  providers: [],
  exports: [],
})
export class ControllersModule {}
