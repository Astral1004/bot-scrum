import React from 'react';
import { StyledPollNameCard} from './styles';

interface PollNameCardProps {
    label: string;
  }
  
export const PollNameCard = (props:PollNameCardProps): JSX.Element => {
  return (
    <StyledPollNameCard >
      {props.label}

    </StyledPollNameCard>
  );
};
