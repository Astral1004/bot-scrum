import styled from 'styled-components';

export const Wrapper = styled.div(({}) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  width: 1300,
  minHeight: 600,
  marginLeft: 160,
  '@media screen and (max-width: 1900px)': {
    width: 1200
  },
  '@media screen and (max-width: 1700px)': {
    width: 1050
  },
  '@media screen and (max-width: 1550px)': {
    width: 850
  },
  '@media screen and (max-width: 1300px)': {
    margin: 30,
    width: 1300
  },
  '@media screen and (max-width: 550px)': {
    margin: '120px 0 10px 10px'
  }
}));
export const StyledHomePageLayout = styled.div(({}) => ({
  '@media screen and (max-width: 361px)': {
    width: '90%',
    marginLeft: 25
  }
}));
export const Container = styled.div(({}) => ({
  marginTop: 20,
  overflowY: 'scroll',
  overflowX: 'hidden',
  maxHeight: 550,
  '::-webkit-scrollbar': {
    marginLeft: 1,
    width: 2
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#2196F3'
  }
}));

export const StyledBlockIcons = styled.span(({}) => ({}));

export const StyledIcon = styled.i(({}) => ({
  cursor: 'pointer',
  color: '#979797',
  fontSize: 20,
  marginRight: 10,
  fill: '#979797',
  ':hover': {
    fill: '#2196F3',
    ':before': {
      color: '#2196F3'
    }
  }
}));

export const CardList = styled.div(({}) => ({
  '@media screen and (max-width: 1300px)': {
    justifyContent: 'space-around'
  }
}));
export const FooterCard = styled.div(({}) => ({
  width: 365
}));
