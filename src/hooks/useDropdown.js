import React, { useState, useCallback } from 'react';
import { FormGroup, Select } from '../components/Elements';

const useDropdown = (label, initialValue = '', options) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => setValue(event.target.value);

  const Dropdown = () => (
    <FormGroup>
      <label>{label}:</label>
      <Select value={value} onChange={onChange}>
        <option disabled value="">
          Choose a {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </FormGroup>
  );

  return [value, setValue, Dropdown];
};

export default useDropdown;
