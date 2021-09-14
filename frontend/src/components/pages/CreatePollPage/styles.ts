import styled from 'styled-components';
import { Button } from 'primereact/button';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';

export const PollMain = styled.div(({}) => ({
  position: 'absolute',
  width: '100%',
  padding: 5,
  top: 50,
  maxHeight: 550,
  overflow: 'scroll',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    marginLeft: 4,
    width: 2
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#2196F3'
  },

  '@media screen and (max-width: 1000px)': {
    maxHeight: 500
  },
  '.active': {
    color: '#2196F3',
    backgroundColor: '#BBDEFB57'
  }
}));

export const Wrapper = styled.div(({}) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  width: '100%',
  maxWidth: 1200,
  marginTop: 100,
  marginLeft: 200,

  '@media screen and (max-width: 1600px)': {
    width: 950
  },
  '@media screen and (max-width: 1300px)': {
    margin: '100px 0 '
  },
  '@media screen and (max-width: 1000px)': {
    width: 750,
    margin: '80px  11px 0 10px',
    textOverflow: 'ellipsis'
  },
  '@media screen and (max-width: 550px)': {
    margin: '130px 10px 0 10px'
  }
}));

export const Container = styled.div(({}) => ({}));

export const PollElement = styled.div(({}) => ({
  marginTop: 20,
  input: {
    width: '100%'
  },
  span: {
    display: 'block'
  }
}));

export const Title = styled.h1(({}) => ({
  fontSize: 14,
  fontWeight: 600,
  textAlign: 'left',
  marginBottom: 10
}));

export const MultiSelectStyled = styled(MultiSelect)(({}) => ({
  cursor: 'pointer'
}));

export const LeftBlock = styled.div(({}) => ({
  width: '50%',
  height: '100%',
  backgroundColor: 'white',
  float: 'left',
  '@media screen and (max-width: 1000px)': {
    width: '100%'
  }
}));

export const RightBlock = styled.div(({}) => ({
  float: 'right',
  width: '50%',
  minHeight: 723,

  '@media screen and (max-width: 1000px)': {
    position: 'absolute',
    width: 0
  }
}));

export const PollContainer = styled.div(({}) => ({
  minHeight: 664,
  width: 400,
  marginTop: 60,
  position: 'relative',
  '@media screen and (max-width: 1000px)': {
    minHeight: 600
  }
}));

export const DropdownStyled = styled(Dropdown)(({}) => ({
  width: '90%',
  '@media screen and (max-width: 370px)': {
    width: '85%'
  }
}));

export const ButtonStyled = styled(Button)(({}) => ({
  marginLeft: 15,
  '@media screen and (max-width: 450px)': {
    marginLeft: 2
  }
}));

export const Footer = styled.div(({}) => ({
  position: 'absolute',
  width: '100%',
  bottom: 20
}));

export const CloseQuestion = styled.div(({}) => ({}));
