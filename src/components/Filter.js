import React, { useState } from 'react';
import styled from '@emotion/styled';

const Filter = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('all');

  const onLocationChange = (event) => setLocation(event.target.value);
  const onAnimalChange = (event) => setAnimal(event.target.value);
  const onBreedChange = (event) => setBreed(event.target.value);

  return (
    <StyledFilter>
      <h2>Filter</h2>
      <Form>
        <FormGroup>
          <label htmlFor="location">Location:</label>
          <Input
            value={location}
            onChange={onLocationChange}
            id="location"
            type="text"
            placeholder="City, ST"
          />
        </FormGroup>
        <FormGroup>
          <label>Animal:</label>
          <Select value={animal} onChange={onAnimalChange}>
            <option disabled value="">
              Choose a type of animal
            </option>
            <option value="dog">dog</option>
            <option value="cat">cat</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <label>Breed:</label>
          <Select disabled={!animal} value={animal} onChange={onBreedChange}>
            <option value="all">all</option>
            <option value="breed">breed</option>
          </Select>
        </FormGroup>
        <Submit disabled={!location || !animal || !breed}>Submit</Submit>
      </Form>
    </StyledFilter>
  );
};

// Styled components
const StyledFilter = styled.aside`
  background-color: var(--honeydew);
  padding: 1rem;
  color: var(--text-inverted);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

const Form = styled.form``;

const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  label {
    flex: 0 0 30%;
  }
`;

export const Input = styled.input`
  font: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.1rem 0.8rem;
  border: 3px solid var(--powder-blue);
  flex: 0 0 70%;
`;

export const Select = styled.select`
  font: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.1rem 0.8rem;
  border: 3px solid var(--powder-blue);
  flex: 0 0 70%;
`;

const Submit = styled.button`
  display: block;
  margin: 1rem auto;
  border: none;
  outline: none;
  background-color: var(--imperial-red);
  padding: 0.5rem 2rem;
  box-shadow: var(--shadow-small);
  color: var(--text);
  font: inherit;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export default Filter;
