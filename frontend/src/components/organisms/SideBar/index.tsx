import { FC, useState } from 'react';
import {
  StyledSideBar,
  Avatar,
  CloseButton,
  LogoutButton,
  UserInfo,
  UserInfoName,
  UserInfoRole
} from './styles';
import { SideBarContainer } from '../../molecules/SideBarContainer';
import { useAppSelector } from '../../../store/reducers/rootReducer';
import { useHistory } from 'react-router';
interface SidebarProps {
  visible: boolean;
}

export const Sidebar: FC<SidebarProps> = ({ visible }) => {
  // eslint-disable-next-line no-unused-vars
  const [visibleLeft, setVisibleLeft] = useState(true);
  const data = useAppSelector((state) => state.rootReducer.user);
  const history = useHistory();
  const { profileImage } = useAppSelector((state) => state.rootReducer.user);

  const handleClickCloseButton = () => {
    const element = document.getElementById('sidebar')!;
    element.style.cssText =
      'display:none @media (min-width: 1200px) {#sidebar {display: block}}';
  };

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <div className="card">
      <StyledSideBar
        id="sidebar"
        visible={visible}
        modal={false}
        onHide={() => setVisibleLeft(false)}
        showCloseIcon={false}
      >
        <CloseButton onClick={handleClickCloseButton}>
          <i className="pi pi-times" />
        </CloseButton>
        <UserInfo>
          <Avatar
            url={
              `${process.env.REACT_APP_BASE_API_URL}` +
              '/user/profile-image/' +
              `${profileImage}`
            }
            className="p-mr-2 p-shadow-4"
          />
          <UserInfoName>
            {data.firstName} {data.lastName}
          </UserInfoName>
          <UserInfoRole>{data.role}</UserInfoRole>
        </UserInfo>
        <SideBarContainer />
        <LogoutButton label="Выход" onClick={logout} />
      </StyledSideBar>
    </div>
  );
};
