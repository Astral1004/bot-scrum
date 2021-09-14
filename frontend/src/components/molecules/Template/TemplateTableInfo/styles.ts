import styled from 'styled-components';

export const TableStyles = styled.table(({}) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',

  borderCollapse: 'collapse',
  border: '2px solid white',
  width: '100%',
  td: {
    padding: 10,
    border: '1px solid  #BBDEFB'
  },
  '.title': {
    fontWeight: 600
  }
}));
export const QuestionDescription = styled.div(({}) => ({
  maxWidth: 280
}));
