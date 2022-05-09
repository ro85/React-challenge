import React, { useEffect, useState } from 'react';
import BackButton from './BackButton';
import '../styles/Recipe.css';

const DrinkRecipe = ({ drink, ingredients }) => {
  console.log(ingredients);
  return (
    <div className="card-recipe ml-3">
      <div className="d-flex align-items-center recipe-header ">
        <BackButton />       
        <h3 className='flex-grow-1 text-center'>{drink.name}</h3>        
      </div>
      <div className='d-flex flex-column recipe-body'>
        <img src={drink.image} alt="" style={{width:"300px", height:"310px", borderRadius:"0px"}} />
        <div className='recipe-info'>
          { ingredients.map( (item, index) => 
            item !== "null - null" ? <p key={index}>{item}</p> : null
          )
          }
          <li className='mt-3'>How to prepare</li>
          <p>{drink.instruction}</p>
        </div>
      </div>      
    </div>
  ) 
}

export default DrinkRecipe