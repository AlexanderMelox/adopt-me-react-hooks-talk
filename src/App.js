import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Container, Header } from './components/Elements';

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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pet/:id">
            <div>Details page</div>
          </Route>
        </Switch>
      </Container>
    </>
  );
};

export default App;
