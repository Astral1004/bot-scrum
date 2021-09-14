import styled from 'styled-components';

export const ContainerDateTime = styled.div(({}) => ({
  position: 'relative',
  backgroundColor: 'white',
  padding: 30,
  p: {
    marginTop: 10,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400
  },
  '@media screen and (max-width: 1000px)': {
    position: 'absolute',
    minWidth: 200,
    right: -500,
    bottom: 280
  },
  '@media screen and (max-width: 540px)': {
    right: -400
  }
}));

export const CloseButton = styled.i(({}) => ({
  position: 'absolute',
  right: 20,
  top: 20,
  cursor: 'pointer'
}));

export const Title = styled.h1(({}) => ({
  fontSize: 14,
  fontWeight: 600,
  textAlign: 'left',
  marginBottom: 10
}));
