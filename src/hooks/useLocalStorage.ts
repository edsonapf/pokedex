import { useState } from 'react';

function useLocalStorage<K>(
  key: string,
  initialValue: K
): [K, (value: K | ((prev: K) => K)) => void] {
  const [storedValue, setStoredValue] = useState<K>(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: K | ((prev: K) => K)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;