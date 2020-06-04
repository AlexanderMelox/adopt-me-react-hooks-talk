import React from 'react'
import { HomeContainer as Container } from '../components/Elements'
import Filter from '../components/Filter'

const Home = () => {
  return (
    <Container>
      <Filter />
      <div>Results</div>
    </Container>
  )
}

export default Home
