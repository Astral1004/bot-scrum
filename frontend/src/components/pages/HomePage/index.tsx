import { FC, useEffect, useRef } from 'react';
import { StatusPoll } from '../../molecules/StatusPoll';
import { Card } from '../../organisms/Card';
import { GenericTemplate } from '../../templates/GenericTemplate';
import { ReactComponent as FilterPollsIcon } from '../../../assets/icons/FilterPolls.svg';
import { setFlagHeaderQuestionnaires } from '../../../store/actions/visibleFlagsAction';
import { NavLink } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector
} from '../../../store/reducers/rootReducer';
import {
  StyledHomePageLayout,
  StyledIcon,
  Wrapper,
  Container,
  CardList,
  FooterCard,
  StyledBlockIcons
} from './styles';
import {
  axiosGetPolls,
  deleteStatusAndError
} from '../../../store/actions/pollAction';
import { Toast } from 'primereact/toast';

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const toast = useRef<any>();

  const { polls, status, error } = useAppSelector(
    ({ rootReducer }) => rootReducer.poll.listActivePolls
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
    toast!.current!.show({
      severity: 'success',
      summary: 'Успешно!',
      detail: text,
      life: 3000
    });
    dispatch(deleteStatusAndError());
  };

  useEffect(() => {
    if (status == 'resolved') showSuccess('Опрос завершен!');
    if (status == 'rejected') showError(`Опрос не завершен! ${error}`);
  }, [status]);

  useEffect(() => {
    dispatch(axiosGetPolls());
    dispatch(setFlagHeaderQuestionnaires());

    return () => {
      dispatch(setFlagHeaderQuestionnaires());
    };
  }, [dispatch]);

  return (
    <GenericTemplate>
      <Wrapper>
        <Toast ref={toast} position="top-right" />
        <StyledHomePageLayout>
          <StatusPoll
            label={'Активные опросы'}
            className="p-d-flex p-jc-between p-ai-center"
          >
            <StyledBlockIcons>
              <NavLink to="poll/create">
                <StyledIcon className="pi pi-plus-circle" />
              </NavLink>
              <StyledIcon as={FilterPollsIcon} />
            </StyledBlockIcons>
          </StatusPoll>
          <Container>
            <CardList className="p-d-flex p-jc-between p-flex-wrap">
              {Boolean(polls.length) &&
                polls.map((question, index) => (
                  <Card
                    activeStatus={question.activeStatus}
                    id={question.id}
                    key={`${index}~${question.name}`}
                    nameCard={question.name}
                    formQuestions={question.formQuestions}
                    date={question.createDate}
                    usersArray={question.userForms}
                  />
                ))}
              <FooterCard />
            </CardList>
          </Container>
        </StyledHomePageLayout>
      </Wrapper>
    </GenericTemplate>
  );
};
