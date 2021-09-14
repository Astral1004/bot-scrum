import styled from 'styled-components';

export const StyledCard = styled.div(({}) => ({
  marginBottom: 30,
  background: 'white',
  height: 280,
  width: 365,
  padding: '32px 20px 0 30px',
  borderRadius: 6,
  position: 'relative'
}));

export const Container = styled.div(({}) => ({
  position: 'relative',
  minHeight: 74,
  maxHeight: 140,
  overflowY: 'scroll',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    marginLeft: 4,
    width: 2
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#2196F3'
  }
}));

export const Question = styled.p(({}) => ({
  fontSize: 14,
  fontWeight: 300,
  marginTop: 7,
  width: '100%',
  wordWrap: 'break-word',
  whiteSpace: 'normal'
}));

export const ShowMoreBtn = styled.p(({}) => ({
  fontWeight: 300,
  cursor: 'pointer',
  fontSize: 14,
  color: '#2196F3',
  textDecoration: 'none'
}));

export const FooterCard = styled.div(({}) => ({
  position: 'absolute',
  bottom: 15,
  width: 300,
  height: 20
}));
