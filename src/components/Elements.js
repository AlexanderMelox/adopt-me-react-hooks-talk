import styled from '@emotion/styled';

export const Container = styled.main`
  display: grid;
  grid-template-columns: minmax(4vw, 1fr) minmax(0, 60rem) minmax(4vw, 1fr);
  margin-top: 5rem;

  > * {
    grid-column: 2 / 3;
  }
`;

export const Header = styled.header`
  background-color: var(--prussian-blue);
  padding: 0.5rem 2rem;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
`;

// Home page
export const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 1rem;
`;
