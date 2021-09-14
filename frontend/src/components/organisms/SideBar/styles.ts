import styled from 'styled-components';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { AvatarUser } from '../../atoms/AvatarUser';

export const StyledSideBar = styled(Sidebar)(({}) => ({
  marginTop: '92px',
  width: '253px',
  boxShadow: 'none !important',
  '.p-sidebar-content': {
    overflowX: 'hidden'
  },
  '@media screen and (max-width: 1300px)': {
    marginTop: '0',
    zIndex: 1000,
    display: 'none'
  }
}));
export const CloseButton = styled.div(({}) => ({
  display: 'none',
  i: {
    fontSize: '1em'
  },
  '@media screen and (max-width: 1300px)': {
    display: 'block',
    marginLeft: '200px',
    marginBottom: '40px'
  }
}));

export const Avatar = styled(AvatarUser)(({}) => ({
  border: '3px solid white '
}));

export const UserInfo = styled.div(({}) => ({
  display: 'none',

  marginBottom: '30px',
  '@media screen and (max-width: 1300px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export const UserInfoName = styled.h1(({}) => ({
  fontSize: '16px'
}));

export const UserInfoRole = styled.p(({}) => ({}));

export const LogoutButton = styled(Button)(({}) => ({
  width: '90%',
  margin: '50px 0 0 10px',
  display: 'none',

  '@media screen and (max-width: 1300px)': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));
