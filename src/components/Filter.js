import React, {
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from 'react';
import {
  Button,
  StyledFilter,
  Form,
  FormGroup,
  Input,
  Select,
} from './Elements';
import { fetchBreeds, fetchAnimals } from '../utils/helpers';

import CallbackExample from './CallbackExample';
import useDropdown from '../hooks/useDropdown';
import useStore from '../hooks/useStore';

const Filter = () => {
  const animalTypes = useMemo(() => ['dog', 'cat'], []);
  const [state, { setLoading, setPets }] = useStore();
  const [breeds, setBreeds] = useState([]);

  const [location, setLocation] = useState('Austin, TX');
  const [animal, setAnimal, AnimalDropdown] = useDropdown(
    'Animal',
    '',
    animalTypes
  );
  const [breed, setBreed, BreedDropdown] = useDropdown('Breed', '', breeds);

  const onLocationChange = useCallback((event) => {
    setLocation(event.target.value);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (animal !== '') setBreeds(await fetchBreeds(animal));
    };
    fetchData();
  }, [animal]);

  const reset = useCallback(() => {
    setBreed('');
    setAnimal('');
  }, [setBreed, setAnimal]);

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      const animals = await fetchAnimals({ location, animal, breed });
      setPets(animals);
      setLoading(false);
      reset();
    },
    [animal, breed, location, setLoading, setPets, reset]
  );

  return (
    <StyledFilter>
      <h2>Filter</h2>
      <CallbackExample someValue={animalTypes} />

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
