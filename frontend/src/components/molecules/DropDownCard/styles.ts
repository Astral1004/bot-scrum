import styled from 'styled-components';

export const StyledInpaceCard = styled.div(({}) => ({
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  li: {
    listStyleType: 'none'
  }
}));

export const PopupMenu = styled.div(({}) => ({
  position: 'absolute',
  left: 170,
  top: 10,
  minHeight: 100,
  background: '#2196F3',
  border: '1px solid #0077D9',
  borderRadius: '6px',
  zIndex: 5,
  ul: {
    marginTop: 15
  }
}));

export const DropDownBtn = styled.div(({}) => ({
  paddingRight: 20,
  cursor: 'pointer'
}));
