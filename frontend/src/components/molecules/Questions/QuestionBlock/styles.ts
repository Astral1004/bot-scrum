import styled from 'styled-components';

export const DeleteQuestion = styled.i(({}) => ({
  cursor: 'pointer',
  paddingRight: 5
}));

export const PollElement = styled.div(({}) => ({
  marginTop: 20,
  input: {
    width: '100%'
  },
  span: {
    display: 'block'
  },
  '.p-input-icon-right > .p-inputtext': {
    paddingRight: '3.2rem'
  }
}));

export const Title = styled.h1(({}) => ({
  fontSize: 14,
  fontWeight: 600,
  textAlign: 'left',
  marginBottom: 10
}));
