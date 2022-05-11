import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DrinkRecipe from '../components/DrinkRecipe';
import BackButton from '../components/BackButton';
import useFetch from '../useFetch';
import '../App.css';

const DrinkPage = ({drinkId}) => {
  const navigate = useNavigate();
  const { idDrink } = useParams();
  const [drink, setDrink] = useState({});
  const [ingredientsAndMeasures, setIngredientsAndMeasures] = useState([]);

  const response  = useFetch(axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`));

  const drinkInfo  = {
    name: response.response.strDrink,
    image: response.response.strDrinkThumb,
    instruction: response.response.strInstructions
  };

  const ingredientsAndMeasuresInfo = [`${response.response.strMeasure1} - ${response.response.strIngredient1}` , `${response.response.strMeasure2} - ${response.response.strIngredient2}`, `${response.response.strMeasure3} - ${response.response.strIngredient3}`, `${response.response.strMeasure4} - ${response.response.strIngredient4}`, `${response.response.strMeasure5} - ${response.response.strIngredient5}`, `${response.response.strMeasure6} - ${response.response.strIngredient6}`, `${response.response.strMeasure7} - ${response.response.strIngredient7}`, `${response.response.strMeasure8} - ${response.response.strIngredient8}`, `${response.response.strMeasure9} - ${response.response.strIngredient9}`, `${response.response.strMeasure10} - ${response.response.strIngredient10}`, `${response.response.strMeasure11} - ${response.response.strIngredient11}`, `${response.response.strMeasure12} - ${response.response.strIngredient12}`, `${response.response.strMeasure13} - ${response.response.strIngredient13}`, `${response.response.strMeasure14} - ${response.response.strIngredient14}`, `${response.response.strMeasure15} - ${response.response.strIngredient15 }` ];      
     
  useEffect(() =>{
    setDrink(drinkInfo);
    setIngredientsAndMeasures(ingredientsAndMeasuresInfo);     
  }, []) 

  return (       
    <div className='d-flex justify-content-center'>        
      <DrinkRecipe drinkId={idDrink} drink={drink} ingredients={ingredientsAndMeasures} />      
    </div> 
  )
}

export default DrinkPage