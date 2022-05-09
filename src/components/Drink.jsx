import React, { useEffect, useState } from 'react'

const Drink = ({ drinkId }) => {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

  const fetchDrink = (urlDrink) => {
    fetch(urlDrink)
      .then(response => response.json())    
      .then((data) => {
         
        const drinkInfo  = {
          name: data.drinks[0].strDrink
        };
  
        const ingredientsInfo = [data.drinks[0].strIngredient1, data.drinks[0].strIngredient2, data.drinks[0].strIngredient3, data.drinks[0].strIngredient4, data.drinks[0].strIngredient5, data.drinks[0].strIngredient6, data.drinks[0].strIngredient7, data.drinks[0].strIngredient8, data.drinks[0].strIngredient9, data.drinks[0].strIngredient10, data.drinks[0].strIngredient11, data.drinks[0].strIngredient12, data.drinks[0].strIngredient13, data.drinks[0].strIngredient14, data.drinks[0].strIngredient15 ];  
  
        setDrink(drinkInfo);
        setIngredients(ingredientsInfo);        
      })   
      .catch(error => console.log(error))    
  };  
    
  useEffect(() =>{
    fetchDrink(urlDrink);    
  }, []) 

  
  return (
    <div className='row'>
     <p>{drink.name}</p>
     <ul>
       <li>{ingredients[0]}</li>
       <li>{ingredients[1]}</li>
     </ul>     
      <p>y {ingredients.filter(Boolean).length - 2} ingredients mas</p>
    </div>
  )
}

export default Drink