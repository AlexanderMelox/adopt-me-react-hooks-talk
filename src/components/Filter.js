import React, { useState, useEffect } from 'react';
import { Button, StyledFilter, Form, FormGroup, Input } from './Elements';

import { fetchBreeds, fetchAnimals } from '../utils/helpers';
import useDropdown from '../hooks/useDropdown';
import useStore from '../hooks/useStore';

const Filter = () => {
  const [, { setLoading, setPets }] = useStore();

  // useState example
  const [location, setLocation] = useState('Austin, TX');

  const [animal, setAnimal, AnimalDropdown] = useDropdown('Animal', '', [
    'dog',
    'cat',
  ]);
  const [breeds, setBreeds] = useState([]);
  const [breed, setBreed, BreedDropdown] = useDropdown('Breed', '', breeds);

  // This will be shown in the first example for useState
  const onLocationChange = (event) => setLocation(event.target.value);

  const reset = () => {
    setBreed('');
    setAnimal('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // Setup global state at this point
    // show dispatch version then function way
    setLoading(true);
    const animals = await fetchAnimals({ location, animal, breed });
    setPets(animals);
    setLoading(false);
    reset();
  };

  useEffect(() => {
    const fetchData = async () => {
      // If an animal was selected set the breeds
      if (animal) setBreeds(await fetchBreeds(animal));
    };
    fetchData();
  }, [animal, setBreeds]);

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
        <AnimalDropdown />
        <BreedDropdown />
        <Button onClick={onSubmit} disabled={!location || !animal || !breed}>
          Submit
        </Button>
      </Form>
    </StyledFilter>
  );
};

export default Filter;
