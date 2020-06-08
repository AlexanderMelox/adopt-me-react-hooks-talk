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
export const Grid = styled.section`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-gap: 1rem;
`;

export const Button = styled.button`
  display: block;
  margin: 1rem auto;
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

  :disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const StyledFilter = styled.aside`
  position: sticky;
  top: 2rem;
  left: 0;
  background-color: var(--honeydew);
  padding: 1rem;
  color: var(--text-inverted);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  height: 324px;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  label {
    flex: 0 0 30%;
  }
`;

export const Input = styled.input`
  font: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.1rem 0.8rem;
  border: 3px solid var(--powder-blue);
  flex: 0 0 70%;
`;

export const Select = styled.select`
  font: inherit;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.1rem 0.8rem;
  border: 3px solid var(--powder-blue);
  flex: 0 0 70%;
  max-width: 70%;
`;

export const StyledResults = styled.div`
  background-color: var(--honeydew);
  padding: 1rem;
  color: var(--text-inverted);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  font-size: 2.5rem;
  line-height: 1;
  color: #aaa;
  font-weight: 100;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  font-size: 2.5rem;
  line-height: 1;
  color: #aaa;
  font-weight: 100;
`;
