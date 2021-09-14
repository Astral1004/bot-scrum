import { MultiSelectProps } from 'primereact/multiselect';
import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

const PrimeMultiSelect = (props: MultiSelectProps) => {
  const panelFooterTemplate = () => {
    const length = props.value ? props.value.length : 0;
    return (
      <div className="p-py-2 p-px-3">
        <b>{length}</b>selected.
      </div>
    );
  };
  return (
    <MultiSelect value={props.value} onChange={props.onChange}
      placeholder="" filter className="multiselect-custom"
      panelFooterTemplate={panelFooterTemplate} display="chip"
    />
  );
};
export default PrimeMultiSelect;
