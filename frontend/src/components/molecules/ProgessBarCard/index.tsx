import React from 'react';
import { StyledProgressBar, StyledValueProgressBar, Container } from './styles';
interface ProgressBarProps {
  value: number;
}

export const ProgessBarCard = (props: ProgressBarProps): JSX.Element => {
  return (
    <Container>
      <StyledValueProgressBar> {props.value}</StyledValueProgressBar>
      <StyledProgressBar value={props.value} />
    </Container>
  );
};
