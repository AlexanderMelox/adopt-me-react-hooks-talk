import React from 'react';
import { Container, Header, Grid } from './components/Elements';
import Filter from './components/Filter';
import Results from './components/Results';

const App = () => {
  return (
    <>
      <Header>
        <h1>
          <span role="img" aria-label="Adopt me logo">
            🐶
          </span>{' '}
          Adopt me
        </h1>
      </Header>
      <Container>
        <Grid>
          <Filter />
          <Results />
        </Grid>
      </Container>
    </>
  );
};

export default App;
