import { questionType } from '../domain/questionsEntity/questions.entity';
import { Options } from '../domain/optionsEntity/options.entity';

export class CreateTemplateDto {
  readonly creatorId: number;
  readonly name: string;
  readonly description: string;
  readonly type: string;
  readonly questions: Array<questionsObject>;
  readonly date?: string;
}

interface questionsObject {
  name: string;
  description: string;
  type: questionType;
  options: Options[];
}
