import styled from 'styled-components';

export const LogotypeContainer = styled.div(({}) => ({
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontFamily: '"Open Sans", sans-serif',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: '1.5em',
  backgroundImage:
    'linear-gradient(173.15deg, #3390ed 0%, #2c7bc8 48.23%, #0f72d3 100%)',
  '-webkit-background-clip': 'text',
  color: 'transparent',
  backgroundClip: 'text'
}));
