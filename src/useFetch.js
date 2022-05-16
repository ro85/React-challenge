import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null); 
  
  useEffect(() => {      
    fetch(url)
    .then(response => response.json())    
    .then(data => {
      setData(data.drinks);
      setIsPending(false);
      setError(null);
    })      
    .catch(error => {
      setIsPending(false);
      setError(error.message);
    })
       
  }, [url]); 

  return { data, isPending, error } ;
}

export default useFetch;

