import styled from 'styled-components';
import { ProgressBar } from 'primereact/progressbar';

export const StyledProgressBar = styled(ProgressBar)(({}) => ({
  height: '3.34px',
  width: '300px',
  borderRadius: '2px',
  marginTop: '2px'
}));

export const StyledValueProgressBar = styled.div(({}) => ({
  fontFamily: 'Open Sans',
  fontSize: '10px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '17px',
  textAlign: 'left',
  color: '#2196F3',
  marginLeft: '140px',
  marginTop: '3px'
}));

export const Container = styled.div(({}) => ({
  position: 'absolute',
  bottom: 55
}));
