import React, { createContext, useReducer } from 'react';

const initialState = {
  loading: false,
  pets: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_PETS':
      return { ...state, pets: action.payload };
    default:
      throw new Error(`No such type of ${action.type}`);
  }
}

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = (bool) => {
    dispatch({ type: 'SET_LOADING', payload: bool });
  };

  const setPets = (animals) => {
    dispatch({ type: 'SET_PETS', payload: animals });
  };

  const methods = {
    setLoading,
    setPets,
  };

  const value = [state, methods, dispatch];

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
