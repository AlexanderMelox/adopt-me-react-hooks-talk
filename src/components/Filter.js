import React from 'react';
import {
  Button,
  StyledFilter,
  Form,
  FormGroup,
  Input,
  Select,
} from './Elements';
import { fetchBreeds, fetchAnimals } from '../utils/helpers';

const Filter = () => {
  return (
    <StyledFilter>
      <h2>Filter</h2>
      <Form>
        <Button>Submit</Button>
      </Form>
    </StyledFilter>
  );
};

export default Filter;
