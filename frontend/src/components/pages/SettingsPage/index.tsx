import { FC, FormEvent } from 'react';
import {
  SettingsContainer,
  SettingsTopBlock,
  SettingsMain,
  Header,
  Avatar,
  HeaderUserName,
  HeaderUserRole,
  InputElement,
  HeaderMain,
  InputElementTitle,
  InputElementEmail,
  InputElementLanguage,
  Footer
} from './styles';
import { Button } from 'primereact/button';
import { GenericTemplate } from '../../templates/GenericTemplate';
import { useAppSelector } from '../../../store/reducers/rootReducer';
import { useHistory } from 'react-router';

export const SettingsPage: FC = () => {
  const data = useAppSelector((state) => state.rootReducer.user);
  const history = useHistory();
  const { profileImage } = useAppSelector((state) => state.rootReducer.user);
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  const changePassword = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    window.location.href =
      'https://account.activedirectory.windowsazure.com/ChangePassword.aspx';
  };

  return (
    <>
      <GenericTemplate>
        <SettingsContainer>
          <SettingsTopBlock />
          <SettingsMain className="p-d-flex p-flex-column p-jc-center p-ai-center">
            <Header className="p-d-flex p-flex-column p-jc-center p-ai-center">
              <Avatar
                url={
                  `${process.env.REACT_APP_BASE_API_URL}` +
                  '/user/profile-image/' +
                  `${profileImage}`
                }
                className="p-mr-2 p-shadow-4"
              />
              <HeaderUserName>
                {data.lastName} {data.firstName}
              </HeaderUserName>
              <HeaderUserRole>{data.role}</HeaderUserRole>
            </Header>
            <HeaderMain>
              <InputElement className="p-d-flex p-jc-start p-ai-center p-flex-row">
                <InputElementTitle>Email</InputElementTitle>
                <InputElementEmail>{data.email}</InputElementEmail>
              </InputElement>
              <InputElement className="p-d-flex p-jc-start p-ai-center p-flex-row">
                <InputElementTitle>Язык</InputElementTitle>
                <InputElementLanguage>Русский</InputElementLanguage>
              </InputElement>
              <Footer className="p-d-flex p-ai-center p-jc-between">
                <Button label="Сменить пароль" onClick={changePassword} />
                <Button label="Выход" onClick={logout} />
              </Footer>
            </HeaderMain>
          </SettingsMain>
        </SettingsContainer>
      </GenericTemplate>
    </>
  );
};
