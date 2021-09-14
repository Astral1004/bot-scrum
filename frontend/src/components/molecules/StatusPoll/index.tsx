import React from 'react';
import { StyledStatusPoll} from './styles';


interface LogotypeProps {
  label: string;
  className?: string;
  children?: React.ReactChild | React.ReactNode
}

export const StatusPoll = (props: LogotypeProps): JSX.Element => {
  return (
    <StyledStatusPoll className={props.className} >
      {props.label}
      {props.children}
    </StyledStatusPoll>
  );
};
