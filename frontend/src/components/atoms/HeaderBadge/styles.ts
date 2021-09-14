import styled from 'styled-components';
import { Badge } from 'primereact/badge';

export const StyledBadge = styled(Badge)(({}) => ({
  '.p-sidebar-close.p-sidebar-icon.p-link': {
    width: '0px',
    height: '0px'
  }
}));
  
export const StyledMainDiv = styled.div(({}) => ({
  width: '45px',
  paddingTop: '13px'
}));
  
