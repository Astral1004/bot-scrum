import { Route, Redirect, RouteProps } from 'react-router-dom';
import { ComponentType, FC } from 'react';
const jwt = require('jsonwebtoken');

interface PublicRouteProps extends RouteProps {
  component: ComponentType<any>;
  restricted?: boolean;
}
const isAuthenticated = () => {
  const infoUserToken = jwt.decode(localStorage.getItem('token'));
  return !!(infoUserToken && infoUserToken.authenticated !== false);
};

export const PublicRoute: FC<PublicRouteProps> = ({
  component: Component,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && restricted ? (
          <Redirect to="/index" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
