import { ChangeEvent, FC, useRef, useState } from 'react';
import {
  CloseQuestion,
  DeleteQuestion,
  PollElement,
  Title,
  Wrapper,
  Header,
  HeaderTitle,
  AddAnswer,
  ButtonStyled
} from './styles';
import { InputText } from 'primereact/inputtext';
import _ from 'lodash';
import { Toast } from 'primereact/toast';

interface AddPollProps {
  addQuestion: (e: any) => void;
  close: () => void;
  className?: string;
  typeId?: number;
  options?: Array<Record<any, any>>;
  questionDescription?: string;
  questionId?: string;
}

export const CloseQuestionBlock: FC<AddPollProps> = ({
  addQuestion,
  close,
  typeId,
  options,
  questionId,
  questionDescription
}) => {
  const [closeQuestionsDescription, setCloseQuestionsDescription] =
    useState<string>(questionDescription || '');
  const [answers, setAnswers] = useState<Record<string, any>[]>(options || []);
  const toast = useRef<any>();

  const showError = (text: string) => {
    toast.current!.show({
      severity: 'error',
      summary: 'Ошибка!',
      detail: text,
      life: 3000
    });
  };

  const showSuccess = (text: string) => {
    toast.current!.show({
      severity: 'success',
      summary: 'Успешно!',
      detail: text,
      life: 3000
    });
  };

  const handleClickAddQuestion = () => {
    addQuestion({
      id: questionId,
      type: typeId,
      name: `Вопрос ${questionId}`,
      description: closeQuestionsDescription,
      options: answers
    });
  };

  const removeClick = (index: number) => {
    const values = [...answers];
    values.splice(index, 1);
    setAnswers(values);
  };

  const handleAddAnswer = () => {
    const values = [...answers];
    values.push({
      name: ''
    });
    setAnswers(values);
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const values = _.cloneDeep(answers);
    if (event.target.name === 'answer') {
      values[index].name = event.target.value;
    }
    setAnswers(values);
  };

  function checkQuestion() {
    try {
      answers.forEach((item, index) => {
        if (item.description === '') {
          throw new Error(`Поле ответ ${index + 1} не заполнено`);
        }
      });
      if (answers.length == 0) {
        throw new Error(`Необходимо добавить ответы`);
      }
      if (closeQuestionsDescription == '') {
        throw new Error(`Необходимо добавить название вопроса`);
      }
      showSuccess('Вопрос добавлен');
      handleClickAddQuestion();
    } catch (e) {
      showError(e.message);
    }
  }

  return (
    <Wrapper className="p-shadow-4">
      <Toast ref={toast} position="top-right" />
      <Header className="p-d-flex p-flex-row p-jc-between p-ai-center">
        <HeaderTitle>Редактирование вопроса</HeaderTitle>
        <DeleteQuestion className="pi pi-times" onClick={() => close()} />
      </Header>
      <CloseQuestion>
        <Title>Название вопроса</Title>
        <InputText
          value={closeQuestionsDescription}
          id={`question`}
          name="question"
          tooltip="Максимальная длина вопроса: 256 символов"
          maxLength={256}
          onChange={(event) => setCloseQuestionsDescription(event.target.value)}
        />
        {answers.map((answer, index) => (
          <PollElement key={`${answer}~${index}`}>
            <Title>Ответ {index + 1}</Title>
            <span className="p-input-icon-right">
              <DeleteQuestion
                className="pi pi-times"
                onClick={() => removeClick(index)}
              />
              <InputText
                value={answer.name}
                id={`answer${index}`}
                name="answer"
                tooltip="Максимальная длина ответа: 256 символов"
                maxLength={256}
                onChange={(event) => handleInputChange(index, event)}
              />
            </span>
          </PollElement>
        ))}
        <ButtonStyled label="Сохранить" onClick={checkQuestion} />
        <AddAnswer onClick={handleAddAnswer}>Добавить ответ</AddAnswer>
      </CloseQuestion>
    </Wrapper>
  );
};
