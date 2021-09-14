import { FC } from 'react';
import AzureAuthenticationContext from './azure-authentication-context';
import { AccountInfo } from '@azure/msal-browser';
import { SlyledButtonLogMicrosoft } from '../styles';
import { useAppDispatch } from '../../../../../store/reducers/rootReducer';
import { axiosSaveUser } from '../../../../../store/actions/userInfoAction';

const ua = window.navigator.userAgent;
const msie = ua.indexOf('MSIE ');
const msie11 = ua.indexOf('Trident/');
const isIE = msie > 0 || msie11 > 0;

interface AzureAuthenticationProps {
  onAuthenticated: any;
  className: string;
}

const AzureAuthenticationButton: FC<AzureAuthenticationProps> = ({
  onAuthenticated
}) => {
  const authenticationModule: AzureAuthenticationContext =
    new AzureAuthenticationContext();
  const dispatch = useAppDispatch();

  const returnedAccountInfo = async (user: AccountInfo) => {
    onAuthenticated(user);
    dispatch(axiosSaveUser(user));
  };

  const loginInMicrosoft = (): any => {
    const typeName = 'loginPopup';
    const logInType = isIE ? 'loginRedirect' : typeName;
    authenticationModule.login(logInType, returnedAccountInfo);
  };

  const showLogInButton = (): any => {
    return (
      <SlyledButtonLogMicrosoft
        id="authenticationButton"
        onClick={() => loginInMicrosoft()}
        label="Войти через Microsoft"
        icon="pi pi-microsoft"
        className="p-button-outlined"
      />
    );
  };

  return authenticationModule.isAuthenticationConfigured ? (
    showLogInButton()
  ) : (
    <div>Authentication Client ID is not configured.</div>
  );
};

export default AzureAuthenticationButton;
