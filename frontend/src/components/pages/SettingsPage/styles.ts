import styled from 'styled-components';
import { AvatarUser } from '../../atoms/AvatarUser';

export const SettingsContainer = styled.div(({}) => ({
  width: '570px',
  minWidth: '375px',
  height: '80vh',
  marginTop: '100px',
  background: 'white',
  borderRadius: '5px',
  fontFamily: 'Open Sans',

  '@media screen and (max-width: 550px)': {
    height: '87.5vh',
    p: {
      fontSize: '12px'
    }
  }
}));

export const SettingsTopBlock = styled.div(({}) => ({
  background: `linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%)`,
  height: '142px',
  borderRadius: '5px 5px 0 0'
}));

export const SettingsMain = styled.div(({}) => ({}));

export const Header = styled.div(({}) => ({
  marginTop: '-50px'
}));

export const Avatar = styled(AvatarUser)(({}) => ({
  width: '110px !important',
  height: '110px !important',
  border: '5px solid white '
}));

export const HeaderUserName = styled.h1(({}) => ({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '16px',
  marginTop: '10px'
}));

export const HeaderUserRole = styled.p(({}) => ({
  color: '#6C757D',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 300,

  marginTop: '10px'
}));

export const HeaderMain = styled.div(({}) => ({
  marginTop: '50px',
  width: '450px',

  '@media screen and (max-width: 768px)': {
    width: '360px'
  },
  '@media only screen and (max-width: 450px)': {
    marginTop: '20px',
    width: '260px'
  }
}));
export const InputElement = styled.div(({}) => ({
  padding: '10px 0 10px 0',
  borderBottom: '2px solid #BBDEFB'
}));

export const InputElementTitle = styled.h1(({}) => ({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '14px',

  marginRight: '50px'
}));

export const InputElementLanguage = styled.p(({}) => ({
  fontSize: '14px'
}));

export const InputElementEmail = styled.p(({}) => ({
  fontSize: '14px',
  color: '#2196F3'
}));
export const Footer = styled.div(({}) => ({
  marginTop: '50px'
}));
