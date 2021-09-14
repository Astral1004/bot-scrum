import styled from 'styled-components';

export const StyledIcon = styled.svg(({}) => ({}));

export const StyledElement = styled.div(({}) => ({
  color: '#fff',
  cursor: 'pointer',
  padding: '8px 20px 8px 20px',
  gap: 14,

  ':hover': {
    background: '#44A7FF'
  }
}));

export const StyledTitle = styled.p(({}) => ({
  fontSize: 12,
  fontWeight: 600
}));
