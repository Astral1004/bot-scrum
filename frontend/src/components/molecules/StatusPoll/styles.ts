import styled from 'styled-components';

export const StyledStatusPoll = styled.div(({}) => ({
  background: 'white',
  height: 51,
  width: '100%',
  borderRadius: 6,
  fontWeight: 400,
  fontSize: 14,
  padding: '0 40px 0 40px',
  '@media screen and (max-width: 550px)': {
    marginLeft: 10,
    width: '95%'
  }
}));
