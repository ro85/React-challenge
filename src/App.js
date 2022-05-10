import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from "react-router-dom";
import './App.css';
import DrinkList from './components/DrinkList';
import DrinkPage from './pages/DrinkPage';
  

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
    <Router>
      <Routes>        
        <Route path="/" element={<DrinkList drinks={drinks}/>} />  
        <Route path="/:idDrink" element={<DrinkPage />} /> 
        <Route path="*" element={<Navigate to="/" />} />        
      </Routes>
    </Router>
  );
}

export default App;
