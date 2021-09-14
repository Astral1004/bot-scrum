import styled from 'styled-components';

export const CheckOption = styled.div(({}) => ({
  cursor: 'pointer',
  paddingRight: 5
}));

export const TableStyles = styled.table(({}) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',

  borderCollapse: 'collapse',
  border: '2px solid white',
  borderBottom: '1px solid  #BBDEFB',
  width: '100%',
  td: {
    padding: 10,
    border: '1px solid  #BBDEFB'
  },
  '.title': {
    width: 100,
    fontWeight: 600
  }
}));

export const OptionsBlock = styled.div(({}) => ({
  background: 'white',
  position: 'absolute',
  right: 250,
  minWidth: 300,
  '@media screen and (max-width: 1200px)': {
    right: 100
  },
  '@media screen and (max-width: 550px)': {
    right: 5,
    minWidth: 200
  }
}));
