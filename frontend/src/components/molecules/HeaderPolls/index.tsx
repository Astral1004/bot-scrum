import { FC } from 'react';
import { Container, NavlinkStyle, ElementTitle } from './styles';
import { useAppSelector } from '../../../store/reducers/rootReducer';

export const Polls: FC = () => {
  const flag = useAppSelector(
    (state) => state.rootReducer.flag.headerQuestionnaires
  );

  return (
    <>
      {flag && (
        <Container className="p-flex-row p-ai-center p-jc-start">
          <NavlinkStyle to="/index">
            <ElementTitle>Активные опросы</ElementTitle>
          </NavlinkStyle>
          <NavlinkStyle to="/polls/archived">
            <ElementTitle>Архивные опросы</ElementTitle>
          </NavlinkStyle>
        </Container>
      )}
    </>
  );
};
