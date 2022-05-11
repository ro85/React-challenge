import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import useFetch from '../useFetch';

const Drink = ({ drinkId }) => {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const response  = useFetch(axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`));

  console.log(response);

  //console.log(axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`));
            

  const drinkInfo  = {      
    name: response.response.strDrink
  };    

  const ingredientsInfo = [response.response.strIngredient1, response.response.strIngredient2, response.response.strIngredient3, response.response.strIngredient4, response.response.strIngredient5, response.response.strIngredient6, response.response.strIngredient7, response.response.strIngredient8, response.response.strIngredient9, response.response.strIngredient10, response.response.strIngredient11, response.response.strIngredient12, response.response.strIngredient13, response.response.strIngredient14, response.response.strIngredient15 ];  

  useEffect(() => {
    setDrink(drinkInfo);
    setIngredients(ingredientsInfo);  
    console.log(drinkInfo); 
  }, [])

  return (
    <div className='flex-grow-1 drink-info'>
      <h2 className='text-left'>{drink.name}</h2>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
      </ul> 
      {(ingredients.filter(Boolean).length - 2 >= 1) ? <p>y {ingredients.filter(Boolean).length - 2} ingredients mas</p> : null }    
      
    </div>
  )
}

export default Drink