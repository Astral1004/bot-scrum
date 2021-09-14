import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmConfig } from '../orm.config';
import { Users } from '../domain/userEntity/users.entity';
import { Questions } from '../domain/questionsEntity/questions.entity';
import { Forms } from '../domain/formEntity/forms.entity';
import { UserForms } from '../domain/userEntity/userForms.entity';
import { FormQuestions } from '../domain/formEntity/formQuestions.entity';
import { Answers } from 'src/domain/answerEntity/answer.entity';
import { Templates } from 'src/domain/templatesEntity/templates.entity';
import { QuestionTemplates } from 'src/domain/questionsEntity/questionTemplates.entity';
import { Options } from '../domain/optionsEntity/options.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: TypeOrmConfig,
    }),
    TypeOrmModule.forFeature([
      Users,
      Questions,
      Forms,
      UserForms,
      FormQuestions,
      Answers,
      Templates,
      QuestionTemplates,
      Options,
    ]),
  ],
  exports: [TypeOrmModule],
  controllers: [],
  providers: [],
})
export class DataModule {}
