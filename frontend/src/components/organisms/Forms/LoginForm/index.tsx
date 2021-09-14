import { useState } from 'react';
import { LoginFormContainer } from './styles';
import { Logotype } from '../../../atoms/Logotype';
import AzureAuthenticationButton from './azure/azure-authentication-component';
import { AccountInfo } from '@azure/msal-browser';

export const LoginForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState<AccountInfo>();

  const onAuthenticated = async (userAccountInfo: AccountInfo) => {
    setCurrentUser(userAccountInfo);
  };
  
  return (
    <LoginFormContainer className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <Logotype label={'Scrumbot'} />
      <AzureAuthenticationButton
        className="p-mt-2"
        onAuthenticated={onAuthenticated}
      />
    </LoginFormContainer>
  );
};
