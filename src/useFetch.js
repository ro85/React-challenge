import { useState, useEffect } from 'react';

const useFetch = (request) => {
  const [response, setResponse] = useState({});
  
  useEffect(() => {
    request.then((fetchResponse) => {      
      setResponse(fetchResponse.data.drinks[0]);     
    });  
  }, []); 


  return { response };
}

export default useFetch;

