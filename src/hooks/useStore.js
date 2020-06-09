import { useContext } from 'react';
import { StoreContext } from '../store';

const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export default useStore;
