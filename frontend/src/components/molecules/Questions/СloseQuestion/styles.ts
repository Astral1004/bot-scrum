import styled from 'styled-components';
import { Button } from 'primereact/button';

export const Wrapper = styled.div(({}) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  position: 'relative',
  background: 'white',
  minWidth: 400,
  minHeight: 400,
  '@media screen and (max-width: 1000px)': {
    left: 400
  },
  '@media screen and (max-width: 600px)': {
    left: 220
  },
  '@media screen and (max-width: 440px)': {
    minWidth: 300
  }
}));

export const Header = styled.div(({}) => ({
  background: 'linear-gradient(91.94deg, #07C2EB 0.29%, #0984DE 100%)',
  width: '100%',
  height: 58,
  padding: '0 40px 0 40px',
  color: 'white'
}));

export const HeaderTitle = styled.h1(({}) => ({
  fontSize: 16,
  fontWeight: 700,
  textAlign: 'left'
}));
export const CloseQuestion = styled.div(({}) => ({
  margin: '20px 40px',
  paddingRight: 5,
  maxHeight: 250,
  overflow: 'scroll',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    marginLeft: 4,
    width: 2
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#2196F3'
  },
  input: {
    width: '100%'
  }
}));

export const PollElement = styled.div(({}) => ({
  marginTop: 20,
  input: {
    width: '100%'
  },
  span: {
    display: 'block'
  }
}));

export const DeleteQuestion = styled.i(({}) => ({
  cursor: 'pointer'
}));

export const Title = styled.h1(({}) => ({
  fontSize: 14,
  fontWeight: 600,
  textAlign: 'left',
  marginBottom: 10
}));

export const AddAnswer = styled.p(({}) => ({
  cursor: 'pointer',
  color: '#2196F3',
  fontSize: 14,
  fontWeight: 400,
  textAlign: 'left'
}));
export const ButtonStyled = styled(Button)(({}) => ({
  position: 'absolute',
  bottom: 20,
  right: 40
}));
