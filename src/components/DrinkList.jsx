import React from 'react';
import Drink from './Drink';
import { useNavigate } from 'react-router-dom';

const DrinkList = ({ drinks }) => {
  const navigate = useNavigate();

  return (
    <div className='row'>
      { drinks.map( (item) => 
        <div key={item.idDrink} >
          <div className='card my-3' onClick={ () => {navigate(`/${item.idDrink}`)}}>
            <img src={item.strDrinkThumb} alt="" style={{width:"200px", height:"200px"}} />
            <Drink drinkId={item.idDrink}  />
          </div>

        </div>
      )

      }

    </div>
  )
}



export default DrinkList