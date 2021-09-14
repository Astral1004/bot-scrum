import React, { FC, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { SettingsPage } from './components/pages/SettingsPage';
import { PrivateRoute } from './routing/PrivateRoute';
import { PublicRoute } from './routing/PublicRoute';
import { Sidebar } from './components/organisms/SideBar';
import { SidebarHeader } from './components/organisms/HeaderSideBar';
import { LoginPage } from './components/pages/LoginPage';
import { useAppDispatch, useAppSelector } from './store/reducers/rootReducer';
import { setStateUserInfo } from './store/actions/userInfoAction';
import { TemplatePage } from './components/pages/TemlatePage';
import { CreatePoll } from './components/pages/CreatePollPage';
import { ErrorPage } from './components/pages/ErrorPage';
import { HomePage } from './components/pages/HomePage';
import { AllArchivePollPage } from './components/pages/AllArchivePollPage';
import { ChartPage } from './components/pages/ChartPage';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(
    (state) => state.rootReducer.flag.sideBarVisibleFlag
  );
  useEffect(() => {
    dispatch(setStateUserInfo());
  }, []);

  return (
    <>
      <Sidebar visible={status} />
      <SidebarHeader visible={status} />
      <Switch>
        <PublicRoute restricted={true} component={LoginPage} path="/login" />
        <PublicRoute exact restricted={true} component={LoginPage} path="/" />
        <PrivateRoute path="/index" exact component={HomePage} />
        <PrivateRoute path="/polls/active" exact component={HomePage} />
        <PrivateRoute path="/settings" exact component={SettingsPage} />
        <PrivateRoute
          path="/polls/archived"
          exact
          component={AllArchivePollPage}
        />
        <PrivateRoute path="/myInterview" exact component={ChartPage} />
        <PrivateRoute path="/template" exact component={TemplatePage} />
        <PrivateRoute path="/poll/create" exact component={CreatePoll} />
        <PrivateRoute path="*" exact component={ErrorPage} />
        <PublicRoute
          exact
          restricted={true}
          component={ErrorPage}
          path="/error"
        />
      </Switch>
    </>
  );
};

export default App;
