import { FC, useState } from 'react';
import {
  SideBarMenu,
  ItemTitle,
  StyleItemForm,
  StyleItemInterview,
  Corner,
  SubMenuItem,
  StyledNavLink,
  StyleElementIcon
} from './styles';
import { ReactComponent as HomeIcon } from '../../../assets/icons/Home.svg';
import { ReactComponent as FormIcon } from '../../../assets/icons/Form.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/icons/Settings.svg';
import { ReactComponent as AddFormIcon } from '../../../assets/icons/AddForm.svg';
import classNames from 'classnames';

export const SideBarContainer: FC = () => {
  const [visibleSubMenu, setVisibleSubMenu] = useState(false);

  const cornerClass = classNames({
    'pi pi-angle-down': true,
    corner: visibleSubMenu
  });

  const handleClickItemForm = () => {
    setVisibleSubMenu(!visibleSubMenu);
  };

  return (
    <>
      <SideBarMenu>
        <StyledNavLink to="/index">
          <StyleItemForm className="p-d-flex p-flex-row p-ai-center">
            <StyleElementIcon as={HomeIcon} />
            <ItemTitle>Главная</ItemTitle>
          </StyleItemForm>
        </StyledNavLink>
        <StyleItemForm
          onClick={handleClickItemForm}
          className="p-d-flex p-flex-row p-ai-center"
        >
          <StyleElementIcon as={FormIcon} />
          <ItemTitle>Опросы</ItemTitle>
          <Corner className={cornerClass} />
        </StyleItemForm>
        {visibleSubMenu && (
          <StyleItemInterview className=" submenu">
            <StyledNavLink to="/poll/create">
              <SubMenuItem className="p-d-flex p-flex-row ">
                <ItemTitle>Coздать опрос</ItemTitle>
                <Corner>
                  <StyleElementIcon as={AddFormIcon} />
                </Corner>
              </SubMenuItem>
            </StyledNavLink>
            <StyledNavLink to="/myInterview">
              <SubMenuItem>
                <ItemTitle>Мои опросы</ItemTitle>
              </SubMenuItem>
            </StyledNavLink>
            <StyledNavLink to="/template">
              <SubMenuItem>
                <ItemTitle>Шаблоны</ItemTitle>
              </SubMenuItem>
            </StyledNavLink>
          </StyleItemInterview>
        )}
        <StyledNavLink to="/settings">
          <StyleItemForm className="p-d-flex p-flex-row p-ai-center">
            <StyleElementIcon as={SettingsIcon} />
            <ItemTitle>Настройки</ItemTitle>
          </StyleItemForm>
        </StyledNavLink>
      </SideBarMenu>
    </>
  );
};
