import { FC, useEffect, useRef } from 'react';
import { GenericTemplate } from '../../templates/GenericTemplate';
import { LoginForm } from '../../organisms/Forms/LoginForm';
import { Container } from './styles';
import {
  useAppDispatch,
  useAppSelector
} from '../../../store/reducers/rootReducer';
import { setFlagSideBar } from '../../../store/actions/visibleFlagsAction';
import { Toast } from 'primereact/toast';
import { deleteStatusAndError } from '../../../store/actions/userInfoAction';

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const toast = useRef<any>();
  useEffect(() => {
    dispatch(setFlagSideBar());

    return () => {
      dispatch(setFlagSideBar());
    };
  }, []);
  const { status } = useAppSelector((state) => state.rootReducer.user);

  const showError = (text: string) => {
    toast.current!.show({
      severity: 'error',
      summary: 'Ошибка!',
      detail: text,
      life: 3000
    });
  };

  useEffect(() => {
    if (status == 'rejected') {
      showError(`Ошибка авторизации. Обратитесь к администратору`);
      dispatch(deleteStatusAndError());
    }
    if (status == 'resolved') {
      dispatch(deleteStatusAndError());
      window.location.pathname = '/index';
    }
  }, [status]);

  return (
    <>
      <Toast ref={toast} position="top-right" />
      <GenericTemplate>
        <Container className="p-shadow-4 p-flex-column p-jc-center p-ai-center">
          <LoginForm />
        </Container>
      </GenericTemplate>
    </>
  );
};
