import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DrinkRecipe from '../DrinkRecipe';


const Drink = () => {
  const navigate = useNavigate();
  const { idDrink } = useParams();
     
  return (       
    <div>
      <div>
        <button className='btn btn-primary' onClick={ () => {navigate("/")}}>volver</button>      
      </div>      
      <DrinkRecipe drinkId={idDrink} />      
    </div> 
  )
}

export default Drink