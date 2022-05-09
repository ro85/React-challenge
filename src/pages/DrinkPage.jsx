import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DrinkRecipe from '../components/DrinkRecipe';
import BackButton from '../components/BackButton';
import '../App.css';


const DrinkPage = () => {
  const navigate = useNavigate();
  const { idDrink } = useParams();
     
  return (       
    <div className='d-flex justify-content-center'>        
      <DrinkRecipe drinkId={idDrink} />      
    </div> 
  )
}

export default DrinkPage