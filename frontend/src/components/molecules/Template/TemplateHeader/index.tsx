import { FC, useEffect } from 'react';
import {
  axiosGetTemplates,
  filterTemplate
} from '../../../../store/actions/templatesAction';
import {
  useAppDispatch,
  useAppSelector
} from '../../../../store/reducers/rootReducer';
import {
  CountTemplate,
  StyledNavLinkLeft,
  StyledNavLinkRight,
  Header
} from './styles';

export const TemplateHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { templatesArray } = useAppSelector(
    (state) => state.rootReducer.listTemplates.templates
  );
  const { id } = useAppSelector((state) => state.rootReducer.user);

  useEffect(() => {
    if (id !== null) {
      dispatch(axiosGetTemplates()).then(() => dispatch(filterTemplate(id!)));
    }
  }, [id]);

  return (
    <Header className="p-d-flex p-flex-row">
      <StyledNavLinkLeft to="/poll/create">Новый опрос</StyledNavLinkLeft>
      <StyledNavLinkRight to="/template">
        Шаблоны
        <CountTemplate value={String(templatesArray.length)} />
      </StyledNavLinkRight>
    </Header>
  );
};
