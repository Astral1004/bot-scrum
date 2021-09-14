import { FC } from 'react';
import { Badge } from 'primereact/badge';
import { StyledMainDiv } from './styles';

interface NotificationProps {
  count: number;
}

export const Notification: FC<NotificationProps> = ({ count }) => (
  <StyledMainDiv>
    <i
      className="pi pi-bell p-mr-4 p-text-secondary p-overlay-badge"
      style={{ fontSize: '1.5rem' }}
    >
      <Badge severity="danger" value={count} />
    </i>
  </StyledMainDiv>
);
