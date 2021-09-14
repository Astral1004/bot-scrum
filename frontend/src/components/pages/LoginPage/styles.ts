import styled from 'styled-components';

export const Container = styled.div(({}) => ({
  width: '738px',
  background: 'white',

  '@media screen and (max-width: 768px)': {
    width: '438px'
  },
  '@media only screen and (max-width: 450px)': {
    height: '100vh'
  }
}));
