import { ApiProperty } from '@nestjs/swagger';
import { questionType } from '../domain/questionsEntity/questions.entity';
import { Options } from '../domain/optionsEntity/options.entity';

export class CreateQuestionDto {
  @ApiProperty()
  readonly creatorId: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly type: questionType;

  @ApiProperty()
  readonly option: Options[];
}
