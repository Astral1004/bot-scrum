import styled from 'styled-components';
import { Button } from 'primereact/button';

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
    margin: '80px 0 0 0'
  },
  '@media screen and (max-width: 1000px)': {
    width: 850,
    margin: '80px 10px 0 10px',
    textOverflow: 'ellipsis'
  },
  '@media screen and (max-width: 550px)': {
    margin: '130px 10px 10px 10px',
    textOverflow: 'ellipsis'
  }
}));

export const Container = styled.div(({}) => ({
  '.activeRightBlock': {
    display: 'none'
  }
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

export const TemplateContainer = styled.div(({}) => ({
  minHeight: 664,
  width: 400,
  marginTop: 60,
  position: 'relative',
  '@media screen and (max-width: 1000px)': {
    minHeight: 600
  }
}));

export const TemplateMain = styled.div(({}) => ({
  position: 'absolute',
  width: '100%',
  top: 50,
  maxHeight: 550,
  overflow: 'scroll',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    width: 4
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

export const RightBlock = styled.div(({}) => ({
  float: 'right',
  width: '50%',

  '@media screen and (max-width: 1000px)': {
    position: 'absolute',
    marginRight: 20,
    width: '85%'
  },
  '@media screen and (max-width: 940px)': {
    width: '90%'
  },
  '@media screen and (max-width: 970px)': {
    width: '88%'
  },
  '@media (max-width: 940px) and (min-width: 920px)': {
    width: '90%'
  },
  '@media (max-width: 920px) and (min-width: 900px)': {
    width: '92%'
  },
  '@media screen and (max-width: 900px)': {
    width: '95%'
  },
  '@media screen and (max-width: 425px)': {
    width: '110%'
  }
}));

export const TemplateInfoContainer = styled.div(({}) => ({
  backgroundColor: 'white',
  margin: 30,

  '@media screen and (max-width: 1000px)': {
    margin: 0,
    minHeight: 660,
    boxShadow: 'none',
    justifyContent: 'flex-start'
  }
}));
export const CloseButton = styled.i(({}) => ({
  position: 'absolute',
  display: 'none',
  right: 20,
  top: 20,

  '@media screen and (max-width: 1000px)': {
    display: 'block'
  }
}));

export const TemplateInfoHeader = styled.h1(({}) => ({
  color: '#003768',
  fontWeight: 600,
  fontSize: 16,
  lineHeight: 6
}));

export const TemplateInfoMain = styled.div(({}) => ({
  fontSize: 14,
  width: '85%',
  marginBottom: 20,
  maxHeight: 550,
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    width: 4
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#2196F3'
  }
}));
export const FooterButton = styled(Button)(({}) => ({
  position: 'absolute',
  marginTop: 60,
  bottom: 20,
  right: 0
}));
