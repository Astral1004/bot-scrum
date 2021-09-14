import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Badge } from 'primereact/badge';

export const Header = styled.div(({}) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 42,
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 17,
  letterSpacing: 0.5,
  color: '#6C757D',

  '.active': {
    border: '1.5px solid #2196F3',
    color: '#2196F3',
    '.p-badge': {
      background: '#BBDEFB',
      color: '#2196F3'
    }
  }
}));

export const StyledNavLinkLeft = styled(NavLink).attrs({
  activeClassName: 'active'
})(({}) => ({
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px 0 0 5px',
  border: '1.5px solid #6C757D',
  cursor: 'pointer',
  textDecoration: 'none',
  ':hover': {
    boxShadow: '0px 2px 18px 0px #00000029'
  }
}));

export const StyledNavLinkRight = styled(StyledNavLinkLeft)(({}) => ({
  borderRadius: '0 5px 5px 0',
  padding: 12,
  color: '#6C757D'
}));

export const CountTemplate = styled(Badge)(({}) => ({
  backgroundColor: '#E9ECEF',
  color: '#6C757D',
  marginLeft: 7,
  fontSize: 12
}));
