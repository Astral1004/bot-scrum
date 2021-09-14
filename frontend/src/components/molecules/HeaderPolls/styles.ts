import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div(({}) => ({
  display: 'flex',
  position: 'fixed',
  margin: '10px 0 0 230px',
  '.active': {
    h1: {
      color: '#495057',
      borderColor: '#07C2EB'
    }
  },
  '@media screen and (max-width: 1300px)': {
    display: 'none'
  }
}));

export const ElementTitle = styled.h1(({}) => ({
  fontFamily: 'Open Sans',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: '17px',
  letterSpacing: '0px',
  textAlign: 'left',
  marginLeft: '55px',
  paddingBottom: '5px',
  borderBottom: '3px solid #d2d2d2',
  color: '#6C757D',
  cursor: 'pointer'
}));

export const NavlinkStyle = styled(NavLink).attrs({
  activeClassName: 'active'
})({
  textDecoration: 'none'
});
