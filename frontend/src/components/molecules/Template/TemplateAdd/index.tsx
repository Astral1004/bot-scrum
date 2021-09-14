import { FC, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../store/reducers/rootReducer';
import {
  addTemplate,
  axiosAddTemplate,
  deleteStatusAndError
} from '../../../../store/actions/templatesAction';
interface TemplateAddProps {
  namePoll?: string;
  periodicityPoll?: string;
  questions?: Array<Record<string, string>>;
  date?: Date | Date[] | undefined;
  className?: string;
  clearForm: () => void;
}

export const TemplateAdd: FC<TemplateAddProps> = ({
  questions,
  namePoll,
  periodicityPoll,
  date,
  clearForm
}) => {
  const dispatch = useAppDispatch();
  const toast = useRef<any>();
  const { id } = useAppSelector((state) => state.rootReducer.user);
  const { status, error } = useAppSelector(
    (state) => state.rootReducer.listTemplates
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

  const addTemplateAndCheckError = () => {
    try {
      if (questions?.length == 0) {
        throw new Error('Необходимо добавить вопросы!');
      }
      if (namePoll == '') {
        throw new Error('Необходимо указать название опроса!');
      }
      if (periodicityPoll !== 'Не повторяется' && !date) {
        throw new Error('Необходимо указать дату и время!');
      }
      if (!periodicityPoll) {
        throw new Error('Необходимо указать периодичность опроса!');
      }
      questions?.forEach((item, index) => {
        if (item.description === '') {
          throw new Error(`Вопрос ${index + 1} не заполнен`);
        }
      });

      const data = {
        creatorId: id,
        name: namePoll,
        questions,
        description: '',
        type: periodicityPoll,
        date: date
      };

      dispatch(axiosAddTemplate(data));
      if (status == 'resolved') {
        dispatch(addTemplate(data));
      }
    } catch (e) {
      showError(e.message);
    }
  };

  useEffect(() => {
    if (status == 'resolved') {
      showSuccess('Шаблон добавлен!');
      clearForm();
    }
    if (status == 'rejected') showError(`Шаблон не добавлен! ${error}`);
  }, [status]);

  return (
    <>
      <Toast ref={toast} position="top-right" />
      <Button
        label="Создать шаблон"
        onClick={addTemplateAndCheckError}
        className="p-button-outlined"
      />
    </>
  );
};
