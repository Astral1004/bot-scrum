import { FC, useEffect, useRef } from 'react';
import { FooterButton } from './styles';
import { Toast } from 'primereact/toast';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../store/reducers/rootReducer';
import {
  axiosAddPoll,
  deleteStatusAndError
} from '../../../../store/actions/pollAction';

interface AddPollProps {
  namePoll?: string;
  periodicityPoll?: string;
  selectedUsers?: Array<Record<string, string>>;
  questions?: Array<Record<string, string>>;
  date?: Date | Date[] | undefined;
  className?: string;
  clearForm: () => void;
}

export const AddPoll: FC<AddPollProps> = ({
  selectedUsers,
  questions,
  periodicityPoll,
  namePoll,
  date,
  clearForm
}) => {
  const dispatch = useAppDispatch();
  const toast = useRef<any>();
  const { id } = useAppSelector((state) => state.rootReducer.user);
  const { status, error } = useAppSelector((state) => state.rootReducer.poll);
  const users: Array<Record<any, any>> = [];

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
    dispatch(deleteStatusAndError());
  };

  const addPollAndCheckError = () => {
    try {
      if (questions?.length == 0) {
        throw new Error('Необходимо добавить вопросы!');
      }
      if (selectedUsers?.length == 0) {
        throw new Error('Необходимо выбрать пользователей!');
      }
      if (periodicityPoll !== 'Не повторяется' && !date) {
        throw new Error('Необходимо указать дату и время!');
      }
      if (!periodicityPoll) {
        throw new Error('Необходимо указать периодичность опроса!');
      }
      if (namePoll == '') {
        throw new Error('Необходимо указать название опроса!');
      }
      questions?.forEach((item, index) => {
        if (item.description === '') {
          throw new Error(`Вопрос ${index + 1} не заполнен`);
        }
      });

      selectedUsers?.forEach((item) => users.push({ userId: item }));
      const data = {
        creatorId: id,
        name: namePoll,
        periodicity: {
          type: periodicityPoll,
          date: String(date)
        },
        users,
        questions
      };
      dispatch(axiosAddPoll(data));
    } catch (e) {
      showError(e.message);
    }
  };

  useEffect(() => {
    if (status == 'resolved') {
      showSuccess('Опрос добавлен!');
      clearForm();
    }
    if (status == 'rejected') showError(`Опрос не добавлен! ${error}`);
  }, [status]);

  return (
    <>
      <Toast ref={toast} position="top-right" />
      <FooterButton label="Создать" onClick={addPollAndCheckError} />
    </>
  );
};
