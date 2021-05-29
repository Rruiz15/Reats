import { useState, useEffect } from 'react';

const UseInitialState = (API) => {
  const [info, setInfo] = useState({
    'tables': [],
    'clients': [],
    'menu': [],
  });
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);
  return info;
};

export default UseInitialState;
