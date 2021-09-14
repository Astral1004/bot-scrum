import React, { useState } from 'react';
import {StyledCalendar} from './styles';
import 'primeflex/primeflex.css';

const PrimeCalendar = () => {
  const [select, setSelect] = useState<Date | Date[] | undefined>(undefined);
  return (
    <div>
      <div className="card">
        <StyledCalendar id="icon" value={select} onChange={(e: { value: any; }) => setSelect(e.value)} showIcon />
      </div>
    </div>
  );
};
export default PrimeCalendar;
