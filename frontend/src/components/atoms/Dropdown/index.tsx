import { DropdownProps } from 'primereact/dropdown';
import React, {useState} from 'react';
import {StyledDropdown} from './styles';

const DropdownDemo = (props: DropdownProps) => {
  const [selected, setSelected] = useState<any>(null);
  const onChange = (e: { value: any}) => {
    setSelected(e.value);
  };
  return (
    <div className="dropdown-demo">
      <div className="card" >
        <StyledDropdown {...props} value={selected} onChange={onChange} />
      </div>
    </div>
  );
};
export default DropdownDemo;
