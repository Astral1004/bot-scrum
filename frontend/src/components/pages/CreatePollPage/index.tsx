import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { TemplateHeader } from '../../molecules/Template/TemplateHeader';
import { GenericTemplate } from '../../templates/GenericTemplate';
import { axiosGetUsers } from '../../../store/actions/usersListAction';
import { AddPoll } from '../../molecules/Poll/AddPoll';
import { TemplateAdd } from '../../molecules/Template/TemplateAdd';
import { Toast } from 'primereact/toast';
import {
  deleteSelectedTemplate,
  deleteStatusAndError
} from '../../../store/actions/templatesAction';
import {
  useAppDispatch,
  useAppSelector
} from '../../../store/reducers/rootReducer';
import {
  Container,
  LeftBlock,
  RightBlock,
  PollContainer,
  DropdownStyled,
  ButtonStyled,
  PollMain,
  PollElement,
  MultiSelectStyled,
  Title,
  Wrapper,
  Footer
} from './styles';
import _ from 'lodash';
import { CloseQuestionBlock } from '../../molecules/Questions/СloseQuestion';
import { DropdownChangeParams } from 'primereact/dropdown';
import OutsideClickHandler from 'react-outside-click-handler';
import { QuestionsBlock } from '../../molecules/Questions/QuestionBlock';
import { QuestionCalendarTime } from '../../molecules/CalendarTime';
import { uuid } from 'uuidv4';

const optionsDropDown: string[] = [
  'Не повторяется',
  'Каждый рабочий день',
  'Ежедневно',
  'Eженедельно',
  'Ежемесячно'
];

enum typeQuestionEnum {
  public,
  private,
  privateAnonymous
}

const questionTypeArray = [
  { id: typeQuestionEnum.public, value: 'Открытый вопрос' },
  { id: typeQuestionEnum.private, value: 'Закрытый вопрос' },
  { id: typeQuestionEnum.privateAnonymous, value: 'Закрытый анонимный вопрос' }
];

export const CreatePoll = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector(({ rootReducer }) => rootReducer.users);
  const { type, name, questionsArray, date } = useAppSelector(
    (state) => state.rootReducer.listTemplates.selectedTemplate
  );
  const [questionTypeId, setQuestionTypeId] = useState<number>();
  const [questionTypeName, setQuestionTypeName] = useState<string>();
  const [questionName, setQuestionName] = useState<string>();
  const [questionOption, setQuestionOption] =
    useState<Array<Record<any, any>>>();
  const [questionId, setQuestionId] = useState<string>();
  const [namePoll, setNamePoll] = useState<string>(name || '');
  const [periodicityPoll, setPeriodicityPoll] = useState<string>(type);
  const [selectedUsers, setSelectedUsers] = useState<Record<string, any>[]>([]);
  const [questions, setQuestions] = useState<Record<string, any>[]>(
    questionsArray || []
  );
  const [dateTime, setDateTime] = useState<Date | Date[] | undefined>(
    date || undefined
  );

  const toast = useRef<any>();
  const [flagCalendar, setFlagCalendar] = useState<boolean>(false);
  const [flagCloseQuestion, setFlagCloseQuestion] = useState<boolean>(false);
  const toggleFlagCalendar = useCallback(
    () => setFlagCalendar((prev) => !prev),
    []
  );

  const enabledFlagQuestion = useCallback(() => setFlagCloseQuestion(true), []);
  const disableFlagCalendar = useCallback(() => setFlagCalendar(false), []);
  const disableFlagQuestion = useCallback(
    () => setFlagCloseQuestion(false),
    []
  );

  const showError = (text: string) => {
    toast.current!.show({
      severity: 'error',
      summary: 'Ошибка!',
      detail: text,
      life: 3000
    });
    dispatch(deleteStatusAndError());
  };

  const showSuccess = (text: string) => {
    toast.current!.show({
      severity: 'success',
      summary: 'Успешно!',
      detail: text,
      life: 3000
    });
  };

  const clearForm = () => {
    setQuestions([]);
    setNamePoll('');
    setPeriodicityPoll('');
    setSelectedUsers([]);
  };

  const handleAddQuestion = () => {
    const uuidQuestion = uuid();
    setQuestionId(uuidQuestion);
    if (questionTypeId !== undefined) {
      if (questionTypeId == 1 || questionTypeId == 2) {
        enabledFlagQuestion();
        disableFlagCalendar();
        setQuestionOption([]);
        setQuestionName(undefined);
      } else {
        const values = [...questions];
        values.push({
          id: uuidQuestion,
          type: questionTypeId,
          name: `Вопрос ${values.length + 1}`,
          description: '',
          options: []
        });
        setQuestions(values);
      }
    } else {
      showError('Необходимо выбрать тип вопроса.');
    }
  };

  const handleAddQuestionClose = (value: Record<string, any>) => {
    const values = [...questions];
    const data = values.findIndex((question) => question.id == value.id);
    if (data !== -1) {
      values[data] = value;
      setQuestions(values);
      showSuccess('Вопрос изменен');
    } else {
      values.push(value);
      setQuestions(values);
      showSuccess('Вопрос добавлен');
    }
    enabledFlagQuestion();
  };

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const values = _.cloneDeep(questions);
    if (event.target.name === 'question') {
      values[index].description = event.target.value;
    }
    setQuestions(values);
  };

  const panelFooterTemplate = () => {
    return (
      <div className="p-py-2 p-px-3">
        {`Выбрано пользователей ${selectedUsers.length}`}
      </div>
    );
  };

  const removeClick = (index: number) => {
    const values = [...questions];
    values.splice(index, 1);
    setQuestions(values);
  };

  const handleClickPeriodicity = (e: DropdownChangeParams) => {
    setPeriodicityPoll(e.value);
    setDateTime(new Date());
  };

  const handleClickTypeQuestion = (event: DropdownChangeParams) => {
    const type = questionTypeArray.find((item) => item.value == event.value);
    if (type) {
      setQuestionTypeId(type.id);
      setQuestionTypeName(type.value);
      disableFlagQuestion();
    }
  };

  const checkPrivateQuestion = (item: any, index: number) => {
    disableFlagCalendar();
    setQuestionTypeId(item.type);
    setQuestionId(item.id);
    setQuestionName(item.description);
    setQuestionOption(item.options);
    enabledFlagQuestion();
  };

  const options = users.map(({ id, firstName, lastName }) => ({
    value: id,
    label: `${firstName} ${lastName}`
  }));

  useEffect(() => {
    dispatch(axiosGetUsers());
    return () => {
      dispatch(deleteSelectedTemplate());
    };
  }, []);

  return (
    <GenericTemplate>
      <Wrapper className="p-shadow-3">
        <Toast ref={toast} position="top-right" />
        <Container>
          <LeftBlock className="p-d-flex p-flex-column p-ai-center">
            <PollContainer>
              <TemplateHeader />
              <PollMain className="p-d-flex p-flex-column">
                <PollElement>
                  <Title>Название опроса</Title>
                  <InputText
                    value={namePoll}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setNamePoll(e.target.value)
                    }
                    placeholder={'Введите название опроса'}
                    tooltip="Максимальная длина опроса: 256 символов"
                    maxLength={256}
                  />
                </PollElement>
                <PollElement>
                  <Title>Периодичность опроса</Title>
                  <div className="p-d-flex p-flex-nowrap">
                    <DropdownStyled
                      value={periodicityPoll}
                      options={optionsDropDown}
                      onChange={handleClickPeriodicity}
                      placeholder="Периодичность"
                    />
                    <ButtonStyled
                      icon="pi pi-calendar"
                      onClick={toggleFlagCalendar}
                    />
                  </div>
                </PollElement>
                <PollElement>
                  <Title>Участники</Title>
                  <MultiSelectStyled
                    value={selectedUsers}
                    options={options}
                    filter
                    onChange={(value) => setSelectedUsers(value.value)}
                    display="chip"
                    panelFooterTemplate={panelFooterTemplate}
                    className="p-multiselect-trigger"
                    filterPlaceholder={'Введите пользователя'}
                    emptyFilterMessage={'Пользователь не найден'}
                    resetFilterOnHide={true}
                  />
                </PollElement>
                <PollElement>
                  <Title>Добавить вопрос</Title>
                  <div className="p-d-flex p-flex-nowrap">
                    <DropdownStyled
                      value={questionTypeName}
                      optionLabel="value"
                      options={questionTypeArray}
                      onChange={handleClickTypeQuestion}
                      placeholder="Тип вопроса"
                    />
                    <ButtonStyled
                      icon="pi pi-plus"
                      onClick={() => handleAddQuestion()}
                    />
                  </div>
                </PollElement>
                <QuestionsBlock
                  questionArray={questions}
                  questionTypeArray={questionTypeArray}
                  checkPrivateQuestion={checkPrivateQuestion}
                  removeClick={removeClick}
                  handleInputChange={handleInputChange}
                  typeId={questionTypeId}
                />
              </PollMain>
              <Footer className="p-d-flex p-jc-between">
                <TemplateAdd
                  questions={questions}
                  namePoll={namePoll}
                  periodicityPoll={periodicityPoll}
                  date={dateTime}
                  clearForm={clearForm}
                />
                <AddPoll
                  questions={questions}
                  selectedUsers={selectedUsers}
                  namePoll={namePoll}
                  periodicityPoll={periodicityPoll}
                  date={dateTime}
                  clearForm={clearForm}
                />
              </Footer>
            </PollContainer>
          </LeftBlock>
          <RightBlock className="p-d-flex p-jc-center p-ai-center ">
            <QuestionCalendarTime
              periodicityPoll={periodicityPoll}
              flagCalendar={flagCalendar}
              setFlag={disableFlagCalendar}
              setDateTime={setDateTime}
              dateTime={dateTime}
            />
            <OutsideClickHandler onOutsideClick={() => disableFlagQuestion()}>
              {flagCloseQuestion && (
                <>
                  <CloseQuestionBlock
                    addQuestion={handleAddQuestionClose}
                    close={disableFlagQuestion}
                    typeId={questionTypeId}
                    questionDescription={questionName}
                    questionId={questionId}
                    options={questionOption}
                  />
                </>
              )}
            </OutsideClickHandler>
          </RightBlock>
        </Container>
      </Wrapper>
    </GenericTemplate>
  );
};
