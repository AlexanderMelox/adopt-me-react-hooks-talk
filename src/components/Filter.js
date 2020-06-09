import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
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
  const [state, dispatch] = useStore();
  const animalTypes = useMemo(() => ['dog', 'cat'], []);
  const [breeds, setBreeds] = useState([]);

  const [location, setLocation] = useState('Austin, TX');
  const [animal, setAnimal, AnimalDropdown] = useDropdown(
    'Animal',
    '',
    animalTypes
  );
  const [breed, setBreed, BreedDropdown] = useDropdown('Breed', '', breeds);

  const onLocationChange = useCallback(
    (event) => setLocation(event.target.value),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      if (animal !== '') setBreeds(await fetchBreeds(animal));
    };
    fetchData();
  }, [animal]);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    const animals = await fetchAnimals({ location, animal, breed });
    dispatch({ type: 'SET_PETS', payload: animals });
    dispatch({ type: 'SET_LOADING', payload: false });
    setBreed('');
    setAnimal('');
  };

  return (
    <StyledFilter>
      <h2>Filter</h2>
      <CallbackExample someValue={onLocationChange} />
      <Form>
        <FormGroup>
          <label>Location:</label>
          <Input type="text" value={location} onChange={onLocationChange} />
        </FormGroup>
        <AnimalDropdown />
        <BreedDropdown />
        <Button onClick={onSubmit} disabled={!animal || !breed || !location}>
          Submit
        </Button>
      </Form>
    </StyledFilter>
  );
};

export default Filter;
