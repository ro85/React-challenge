import React, { useEffect, useState } from 'react'
import './App.css';
  

const App = () => {

  const [drinks, setDrinks] = useState([]);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass"
  
  const fetchDrinks = (url) => {
    fetch(url)
      .then(response => response.json())    
      .then(data => setDrinks(data.drinks))     
      .catch(error => console.log(error))    
  };

  useEffect(() =>{
    fetchDrinks(url);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
