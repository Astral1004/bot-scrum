import { FC, useEffect, useState } from 'react';
import { Logotype } from '../../atoms/Logotype';
import { Notification } from '../../atoms/Notification';
import {
  SidebarUserInfo,
  SidebarStyle,
  Avatar,
  AngleMenu,
  BurgerMenu,
  SidebarWrapper,
  ButtonStyled,
  PopupUser,
  UserName,
  UserRole,
  PopupAvatar,
  PopupUserInfo,
  PopupStatistics,
  StatisticsItem,
  CountItem,
  CountName,
  BorderStyled
} from './styles';
import OutsideClickHandler from 'react-outside-click-handler';
import { Polls } from '../../molecules/HeaderPolls';
import {
  useAppDispatch,
  useAppSelector
} from '../../../store/reducers/rootReducer';
import { useHistory } from 'react-router';
import {
  axiosGetTemplates,
  filterTemplate
} from '../../../store/actions/templatesAction';

interface SidebarHeaderProps {
  visible: boolean;
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({ visible }) => {
  // eslint-disable-next-line no-unused-vars
  const [visibleTop, setVisibleTop] = useState(true);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const userInfo = useAppSelector((state) => state.rootReducer.user);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { templatesArray } = useAppSelector(
    (state) => state.rootReducer.listTemplates.templates
  );
  const { profileImage } = useAppSelector((state) => state.rootReducer.user);

  const logout = () => {
    localStorage.removeItem('token');
    setVisiblePopup(false);
    history.push('/');
  };

  useEffect(() => {
    if (userInfo.id !== null) {
      dispatch(axiosGetTemplates()).then(() =>
        dispatch(filterTemplate(userInfo.id!))
      );
    }
  }, [userInfo.id]);

  return (
    <div className="card">
      <SidebarStyle
        visible={visible}
        position="top"
        modal={false}
        showCloseIcon={false}
        onHide={() => setVisibleTop(true)}
      >
        <SidebarWrapper className="p-d-flex p-flex-row p-jc-between p-ai-center">
          <BurgerMenu
            onClick={() => {
              const element = document.getElementById('sidebar')!;
              element.style.cssText = 'display:block';
            }}
          >
            <i className="pi pi-align-left" />
          </BurgerMenu>
          <Logotype label={'Scrumbot'} />
          <Polls />
          <SidebarUserInfo className="p-d-flex p-flex-row">
            <Notification count={6} />
            <Avatar
              url={
                `${process.env.REACT_APP_BASE_API_URL}` +
                '/user/profile-image/' +
                `${profileImage}`
              }
              className="p-mr-2 p-shadow-4"
            />
            <AngleMenu onClick={toggleVisiblePopup}>
              <i
                className={
                  visiblePopup ? 'pi pi-angle-up ' : 'pi pi-angle-down'
                }
              />
            </AngleMenu>
          </SidebarUserInfo>
        </SidebarWrapper>
      </SidebarStyle>
      <OutsideClickHandler onOutsideClick={() => setVisiblePopup(false)}>
        {visiblePopup && (
          <PopupUser className="p-d-flex p-flex-column  p-ai-center p-shadow-4">
            <PopupAvatar
              url={
                `${process.env.REACT_APP_BASE_API_URL}` +
                '/user/profile-image/' +
                `${profileImage}`
              }
              className="p-mr-2 p-shadow-4"
            />
            <PopupUserInfo className="p-d-flex p-flex-column  p-ai-center">
              <UserName>
                {userInfo.firstName} {userInfo.lastName}
              </UserName>
              <UserRole>{userInfo.role}</UserRole>
            </PopupUserInfo>
            <BorderStyled />
            <PopupStatistics className="p-d-flex p-jc-around p-flex-row">
              <StatisticsItem className="p-d-flex p-flex-column p-ai-center">
                <CountItem>0</CountItem>
                <CountName>Активные опросы</CountName>
              </StatisticsItem>
              <StatisticsItem className="p-d-flex p-flex-column p-ai-center">
                <CountItem>0</CountItem>
                <CountName>Архивные опросы</CountName>
              </StatisticsItem>
              <StatisticsItem className="p-d-flex p-flex-column p-ai-center">
                <CountItem>{templatesArray.length}</CountItem>
                <CountName>Шаблоны</CountName>
              </StatisticsItem>
            </PopupStatistics>
            <BorderStyled />
            <ButtonStyled
              onClick={() => {
                logout();
              }}
              label="Выход"
            />
          </PopupUser>
        )}
      </OutsideClickHandler>
    </div>
  );
};
