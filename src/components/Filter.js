import React, { useState, useEffect } from 'react';
import { Button, StyledFilter, Form, FormGroup, Input } from './Elements';
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

/**
 * Submit disabled snippet
 * disabled={!location || !animal || !breed
 * 
 * FORM GROUP
 * 
<FormGroup>
  <label htmlFor="location">Location:</label>
  <Input id="location" type="text" placeholder="City, ST" />
</FormGroup>
 * 
*/

export default Filter;
