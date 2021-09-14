import { ComponentType, FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { ErrorPage } from '../components/pages/ErrorPage';
const jwt = require('jsonwebtoken');

const isAuthenticated = () => {
  const infoUserToken = jwt.decode(localStorage.getItem('token'));
  return !!(infoUserToken && infoUserToken.authenticated !== false);
};

interface PrivateRouteProps extends RouteProps {
  component: ComponentType<any>;
  path: string;
  exact: boolean;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  ...otherProps
}) => {
  return (
    <Route
      {...otherProps}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <ErrorPage />
      }
    />
  );
};
