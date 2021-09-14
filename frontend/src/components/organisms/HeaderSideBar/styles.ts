import styled from 'styled-components';
import { Sidebar } from 'primereact/sidebar';
import { AvatarUser } from '../../atoms/AvatarUser';
import { Button } from 'primereact/button';

export const SidebarWrapper = styled.div(({}) => ({
  marginLeft: '20px',
  marginRight: '40px',
  '@media only screen and (max-width: 550px)': {
    marginRight: 0
  }
}));

export const SidebarStyle = styled(Sidebar)(({}) => ({
  height: '100px',
  boxShadow: '0px 4px 8px 0px #7891AA29 !important',
  '.p-sidebar-content': {
    overflowY: 'hidden'
  }
}));

export const SidebarUserInfo = styled.div(({}) => ({
  cursor: 'pointer',
  marginRight: '150px',

  '@media screen and (max-width: 1300px)': {
    marginRight: '20px'
  }
}));

export const AngleMenu = styled.div(({}) => ({
  marginTop: '14px'
}));

export const Avatar = styled(AvatarUser)(({}) => ({
  border: '3px solid white '
}));

export const BurgerMenu = styled.div(({}) => ({
  display: 'none',
  i: {
    fontSize: '1.5em'
  },
  '@media screen and (max-width: 1300px)': {
    display: 'block'
  }
}));

export const PopupUser = styled.div(({}) => ({
  position: 'absolute',
  background: 'white',
  top: 30,
  right: 30,
  width: 348,
  height: 386,
  zIndex: 1000,
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  '@media screen and (max-width:400px)': {
    right: 0
  }
}));

export const PopupAvatar = styled(AvatarUser)(({}) => ({
  border: '3px solid #2196F3 ',
  marginTop: 20
}));

export const UserName = styled.h1(({}) => ({
  fontSize: 18,
  fontWeight: 400,
  letterSpacing: 0
}));

export const UserRole = styled.p(({}) => ({
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: 0
}));

export const PopupUserInfo = styled.div(({}) => ({
  marginTop: 10
}));

export const PopupStatistics = styled.div(({}) => ({
  width: 250,
  height: 100,
  marginTop: 10,
  background: 'linear-gradient(to bottom, #BBDEFB45 50%, transparent 50%)',
  borderRadius: '5px 5px 0 0 '
}));

export const StatisticsItem = styled.div(({}) => ({
  width: 50
}));

export const CountItem = styled.h1(({}) => ({
  marginTop: 15,
  fontSize: 18,
  fontWeight: 800,
  letterSpacing: 0,
  color: '#2196F3'
}));

export const CountName = styled.p(({}) => ({
  fontSize: 12,
  marginTop: 15,
  fontWeight: 300,
  letterSpacing: 0,
  textAlign: 'center'
}));

export const ButtonStyled = styled(Button)(({}) => ({
  marginTop: 40,
  width: 250,
  height: 50
}));

export const BorderStyled = styled.div(({}) => ({
  width: 170,
  marginTop: 15,
  borderTop: '2px solid #BBDEFB'
}));
