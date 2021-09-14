import styled from 'styled-components';
import { Button } from 'primereact/button';

export const LoginFormContainer = styled.div(({}) => ({
  margin: '5.4rem 0 7.4rem 0',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '14px',
  lineHeight: '17px',

  '.pi-microsoft:before': {
    display: 'block',
    margin: '0px',
    paddingLeft: '79px'
  }
}));

export const SlyledButtonLogMicrosoft = styled(Button)(({}) => ({
  padding: '0px',
  marginTop: '45px',
  background: '#1976D2',
  border: '1px solid #1976D2',
  boxSizing: 'border-box',
  borderRadius: ' 3px',
  width: '313px',
  height: '50px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '12px',
  lineHeight: '17px',
  paddingRight: '62px',
  display: 'flex',
  justifyContent: 'center',
  '.p-button-label': {
    display: 'block',
    padding: '0px',
    marginRight: '9px'
  }
}));
