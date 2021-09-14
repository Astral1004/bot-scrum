import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { GenericTemplate } from '../../templates/GenericTemplate';
import { TemplateElements } from '../../molecules/Template/TemplateElement';
import { TemplateHeader } from '../../molecules/Template/TemplateHeader';
import { TemplateInfo } from '../../molecules/Template/TemplateTableInfo';
import { Toast } from 'primereact/toast';
import {
  deleteStatusAndError,
  deleteTemplateInfo,
  selectTemplate
} from '../../../store/actions/templatesAction';
import { NavLink } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector
} from '../../../store/reducers/rootReducer';
import {
  Wrapper,
  Container,
  LeftBlock,
  RightBlock,
  TemplateContainer,
  TemplateMain,
  FooterButton,
  TemplateInfoContainer,
  TemplateInfoHeader,
  TemplateInfoMain,
  CloseButton
} from './styles';

export const TemplatePage: FC = () => {
  const dispatch = useAppDispatch();
  const toast = useRef<any>();
  const { templateInfo } = useAppSelector(
    (state) => state.rootReducer.listTemplates
  );
  const { status, error } = useAppSelector(
    (state) => state.rootReducer.listTemplates.templates
  );
  const [flagTemplateInfo, setFlagTemplateInfo] = useState(false);
  const enabledFlagTemplateInfo = useCallback(
    () => setFlagTemplateInfo(true),
    []
  );
  const disabledFlagTemplateInfo = useCallback(
    () => setFlagTemplateInfo(false),
    []
  );

  const showSuccess = (text: string) => {
    toast!.current!.show({
      severity: 'success',
      summary: 'Успешно!',
      detail: text,
      life: 3000
    });
    dispatch(deleteStatusAndError());
  };

  const showError = (text: string) => {
    toast.current!.show({
      severity: 'error',
      summary: 'Ошибка!',
      detail: text,
      life: 3000
    });
    dispatch(deleteStatusAndError());
  };
  const handleClickCloseButton = () => {
    disabledFlagTemplateInfo();
  };
  const handleClickSelectedTemplate = () => {
    dispatch(selectTemplate());
  };

  useEffect(() => {
    if (status == 'resolved') showSuccess('Шаблон удален!');
    if (status == 'rejected') showError(`Шаблон не удален! ${error}`);
  }, [status]);

  useEffect(() => {
    return () => {
      dispatch(deleteTemplateInfo());
    };
  }, []);

  return (
    <GenericTemplate>
      <Wrapper className="p-shadow-3">
        <Toast ref={toast} position="top-right" />
        <Container>
          <LeftBlock className="p-d-flex p-flex-column p-ai-center">
            <TemplateContainer className="p-d-flex p-jc-center p-ai-center p-flex-column">
              <TemplateHeader />
              <TemplateMain className="p-d-flex p-flex-column">
                <TemplateElements
                  setFlagtemplateInfo={enabledFlagTemplateInfo}
                />
              </TemplateMain>
              <NavLink to="/poll/create">
                <FooterButton
                  label="Применить"
                  onClick={handleClickSelectedTemplate}
                />
              </NavLink>
            </TemplateContainer>
          </LeftBlock>
          <RightBlock>
            {flagTemplateInfo && templateInfo.id && (
              <TemplateInfoContainer className="p-d-flex p-jc-center p-ai-center p-flex-column p-shadow-2">
                <CloseButton
                  className="pi pi-times"
                  onClick={handleClickCloseButton}
                />
                <TemplateInfoHeader>Детали шаблона</TemplateInfoHeader>
                <TemplateInfoMain>
                  <TemplateInfo />
                </TemplateInfoMain>
              </TemplateInfoContainer>
            )}
          </RightBlock>
        </Container>
      </Wrapper>
    </GenericTemplate>
  );
};
