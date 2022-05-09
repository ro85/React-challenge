import React, { useEffect, useState } from 'react'

const DrinkReceipt = ({ drinkId }) => {
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const urlDrink = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

  const fetchDrink = (url) => {
    fetch(url)
      .then(response => response.json())    
      .then((data) => {
          
        const drinkInfo  = {
          name: data.drinks[0].strDrink,
          image: data.drinks[0].strDrinkThumb,
          instruction: data.drinks[0].strInstructions
        };
  
        const ingredientsInfo = [`${data.drinks[0].strMeasure1} - ${data.drinks[0].strIngredient1}` , `${data.drinks[0].strMeasure2} - ${data.drinks[0].strIngredient2}`, `${data.drinks[0].strMeasure3} - ${data.drinks[0].strIngredient3}`, `${data.drinks[0].strMeasure4} - ${data.drinks[0].strIngredient4}`, `${data.drinks[0].strMeasure5} - ${data.drinks[0].strIngredient5}`, `${data.drinks[0].strMeasure6} - ${data.drinks[0].strIngredient6}`, `${data.drinks[0].strMeasure7} - ${data.drinks[0].strIngredient7}`, `${data.drinks[0].strMeasure8} - ${data.drinks[0].strIngredient8}`, `${data.drinks[0].strMeasure9} - ${data.drinks[0].strIngredient9}`, `${data.drinks[0].strMeasure10} - ${data.drinks[0].strIngredient10}`, `${data.drinks[0].strMeasure11} - ${data.drinks[0].strIngredient11}`, `${data.drinks[0].strMeasure12} - ${data.drinks[0].strIngredient12}`, `${data.drinks[0].strMeasure13} - ${data.drinks[0].strIngredient13}`, `${data.drinks[0].strMeasure14} - ${data.drinks[0].strIngredient14}`, `${data.drinks[0].strMeasure15} - ${data.drinks[0].strIngredient15 }` ]       
  
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
      <img src={drink.image} alt="" style={{width:"200px", height:"200px"}} />
      { ingredients.map( (item, index) => 
        item !== "null - null" ? <li key={index}>{item}</li> : null
      )
      }
      <p>How to prepare</p>
      <p>{drink.instruction}</p>
    </div>
  ) 
}

export default DrinkReceipt