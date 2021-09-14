import styled from 'styled-components';

export const Wrapper = styled.div(({}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',

  '@media only screen and (max-width: 550px)': {
    minHeight: '90vh'
  }
}));
