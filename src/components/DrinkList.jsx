import React from 'react';
import Drink from './Drink';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const DrinkList = ({ drinks }) => {
  const navigate = useNavigate();

  return (
    <div className='d-flex justify-content-center'>
      <div className='drinks-list'>
        { drinks.map( (item) => 
            <div key={item.idDrink} className="card-drinks" >
              <div className='d-flex justify-content-between card-drink' onClick={ () => {navigate(`/${item.idDrink}`)}}>           
                <Drink drinkId={item.idDrink}  />
                <img src={item.strDrinkThumb} alt="" style={{width:"200px", height:"200px"}} />
              </div>
            </div>
          )
        }
      </div>
    </div>    
  )
}

export default DrinkList