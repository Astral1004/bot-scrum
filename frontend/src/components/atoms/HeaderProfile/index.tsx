import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import { StyledDiv } from './styles';
import { HomePage } from '../../pages/HomePage';
import { StyledSpan } from './styles';

const HeaderProfile = () => {
  const [item, setItem] = useState(false);
  return (
    <>
      <StyledSpan
        onClick={() => setItem(!item)}
        className="p-d-inline-flex p-align-center"
      >
        <i className="pi pi-angle-down"></i>
      </StyledSpan>
      {item && (
        <StyledDiv>
          <HomePage />
        </StyledDiv>
      )}
    </>
  );
};
export default HeaderProfile;
