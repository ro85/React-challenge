import BackButton from './BackButton';
import '../styles/Recipe.css';

const DrinkRecipe = ({ drink }) => {

  const ingredientsAndMeasuresInfo = [`${drink.strMeasure1} - ${drink.strIngredient1}` , `${drink.strMeasure2} - ${drink.strIngredient2}`, `${drink.strMeasure3} - ${drink.strIngredient3}`, `${drink.strMeasure4} - ${drink.strIngredient4}`, `${drink.strMeasure5} - ${drink.strIngredient5}`, `${drink.strMeasure6} - ${drink.strIngredient6}`, `${drink.strMeasure7} - ${drink.strIngredient7}`, `${drink.strMeasure8} - ${drink.strIngredient8}`, `${drink.strMeasure9} - ${drink.strIngredient9}`, `${drink.strMeasure10} - ${drink.strIngredient10}`, `${drink.strMeasure11} - ${drink.strIngredient11}`, `${drink.strMeasure12} - ${drink.strIngredient12}`, `${drink.strMeasure13} - ${drink.strIngredient13}`, `${drink.strMeasure14} - ${drink.strIngredient14}`, `${drink.strMeasure15} - ${drink.strIngredient15 }` ];
 
  return (
    <div className="card-recipe ml-3">
      <div className="d-flex align-items-center recipe-header ">
        <BackButton />       
        <h3 className='flex-grow-1 text-center'>{drink.strDrink}</h3>        
      </div>
      <div className='d-flex flex-column recipe-body'>
        <img src={drink.strDrinkThumb} alt="" style={{width:"300px", height:"310px", borderRadius:"0px"}} />
        <div className='recipe-info'>
          {ingredientsAndMeasuresInfo.map( (item, index) => 
            item !== "null - null" ? <p key={index}>{item}</p> : null
          )
          }
          <li className='mt-3'>How to prepare</li>
          <p>{drink.strInstructions}</p>
        </div>
      </div>      
    </div>
  ) 
}

export default DrinkRecipe