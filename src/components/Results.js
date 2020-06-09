import React, { useContext } from 'react';
import { Empty, Loading, StyledResults } from './Elements';
import Card from './Card';

import useStore from '../hooks/useStore';

const Results = () => {
  const [state] = useStore();
  const { loading, pets } = state;

  let content;
  if (loading) {
    content = (
      <Loading>
        <span role="img" aria-label="cat emoji">
          😻
        </span>
        Loading pets to adopt!
      </Loading>
    );
  } else if (pets.length > 0) {
    content = pets.map((animal) => <Card key={animal.id} animal={animal} />);
  } else if (pets.length === 0) {
    content = (
      <Empty>
        <span role="img" aria-label="cat emoji">
          😿
        </span>
        No pets to show...
      </Empty>
    );
  }

  return (
    <StyledResults>
      <h2>Results</h2>
      {content}
    </StyledResults>
  );
};

export default Results;
