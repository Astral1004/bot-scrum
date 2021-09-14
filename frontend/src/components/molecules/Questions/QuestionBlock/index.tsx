import { ChangeEvent, FC } from 'react';
import { DeleteQuestion, PollElement, Title } from './styles';
import { InputText } from 'primereact/inputtext';

interface QuestionsBlockProps {
  questionArray: Array<Record<any, any>>;
  questionTypeArray: Array<Record<any, any>>;
  checkPrivateQuestion: (question: Record<any, any>, index: number) => void;
  removeClick: (id: number) => void;
  handleInputChange: (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  typeId?: number;
}

export const QuestionsBlock: FC<QuestionsBlockProps> = ({
  questionArray,
  questionTypeArray,
  checkPrivateQuestion,
  removeClick,
  handleInputChange,
  typeId
}) => {
  const getNameTypeQuestion = (id: number) => {
    const data = questionTypeArray.find((item) => item.id == id);
    return data!.value;
  };
  const data = questionArray.map((question, index) => (
    <PollElement key={`${question}~${index}`}>
      <Title>{`Вопрос ${index + 1} (${getNameTypeQuestion(
        question.type
      )})`}</Title>
      <span className="p-input-icon-right">
        <i>
          {(question.type == 1 || question.type == 2) && (
            <DeleteQuestion
              className="pi pi-file-o"
              onClick={() => checkPrivateQuestion(question, index)}
            />
          )}
          <DeleteQuestion
            className="pi pi-times"
            onClick={() => removeClick(index)}
          />
        </i>
        <InputText
          value={question.description}
          id={`question${index}`}
          name="question"
          tooltip="Максимальная длина вопроса: 256 символов"
          maxLength={256}
          onChange={(event) => handleInputChange(index, event)}
        />
      </span>
    </PollElement>
  ));
  return <>{data}</>;
};
