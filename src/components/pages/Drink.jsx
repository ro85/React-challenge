import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DrinkReceipt from '../DrinkReceipt';


const Drink = () => {
  const navigate = useNavigate();
  const { idDrink } = useParams();

     
  return (
       
    <div>
      <div>
        <button className='btn btn-primary' onClick={ () => {navigate("/")}}>volver</button>      
      </div>
      
      <DrinkReceipt drinkId={idDrink} />      
    </div>      

  )
}

export default Drink