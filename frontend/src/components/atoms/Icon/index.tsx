import React from 'react';
import {StyledIcons} from './styles';

interface Props {
  icon: string;
  className?: string;
}

export const Icon = (props: Props): JSX.Element => {
  return (
    <>
      <StyledIcons>
        <i className={props.icon}></i>
      </StyledIcons>
      
    </>
  );
};
