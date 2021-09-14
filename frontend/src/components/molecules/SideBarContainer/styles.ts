import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SideBarMenu = styled.ul(({}) => ({
  width: '253px',
  margin: '30px 0 0 -16px',
  listStyle: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  '.active': {
    'div, li': {
      color: 'white',
      background: 'linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%)'
    }
  },
  '.active:active': {
    div: {
      boxShadow: ' 0px 0px 0px 3.8px #BBDEFB, 0px 0px 0px -2.8px #BBDEFB'
    }
  }
}));

export const StyleItemInterview = styled.ul(({}) => ({
  listStyle: 'none'
}));

export const SubMenuItem = styled.li(({}) => ({
  padding: '15px 2px 15px 60px',
  ':hover': {
    background: '#BBDEFB4D',
    color: '#2196F3'
  }
}));

export const Corner = styled.i(({}) => ({
  position: 'absolute',
  right: '10px'
}));

export const ItemTitle = styled.p(({}) => ({
  marginLeft: '20px',
  color: '#495057, 100%',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '17px',
  textDecoration: 'none'
}));

export const StyleItemForm = styled.div(({}) => ({
  width: '253px',
  padding: '15px 10px 15px 30px',

  ':active': {
    boxShadow: ' 0px 0px 0px 3.8px #BBDEFB'
  },

  ':hover': {
    background: '#BBDEFB4D',
    color: '#2196F3'
  },
  '.corner': {
    transform: 'rotate(180deg)'
  }
}));

export const StyledNavLink = styled(NavLink).attrs({
  activeClassName: 'active'
})(({}) => ({
  color: '#495057',
  textDecoration: 'none'
}));

export const StyleElementIcon = styled.svg(({}) => ({}));
