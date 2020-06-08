import React from 'react';
import styled from '@emotion/styled';

const Card = ({ animal }) => {
  let img = <Placeholder>{animal.species === 'Dog' ? '🐶' : '🐱'}</Placeholder>;
  if (animal.photos[0]?.medium) {
    img = <Img src={animal.photos[0].medium} />;
  }

  return (
    <StyledCard>
      {img}
      <div>
        <h3>{animal.name}</h3>
        <ul>
          <li>Age: {animal.age}</li>
          <li>Breed: {animal.breeds.primary}</li>
          <li>
            Distance: I'm {animal.distance.toFixed(0)} miles away from you!
          </li>
        </ul>
        <ViewButton target="_blank" href={animal.url}>
          View
        </ViewButton>
      </div>
    </StyledCard>
  );
};

// Styled components
const ViewButton = styled.a`
  display: inline-block;
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
  text-decoration: none;
  margin-top: 1rem;
`;

const StyledCard = styled.div`
  background-color: var(--powder-blue);
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: var(--shadow);
  padding: 1rem;

  ul {
    list-style: none;
  }
`;

const Placeholder = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--steel-blue);
  box-shadow: var(--shadow-small);
  font-size: 3rem;
  margin-right: 1rem;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--steel-blue);
  box-shadow: var(--shadow-small);
  font-size: 3rem;
  object-fit: cover;
  margin-right: 1rem;
`;

export default Card;
