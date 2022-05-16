import { useParams } from 'react-router-dom';
import DrinkRecipe from '../components/DrinkRecipe';
import useFetch from '../useFetch';
import '../App.css';

const DrinkPage = () => {
  const { idDrink } = useParams();
  
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  
  const { data: drink, isPending, error } = useFetch(url)

  return (       
    <div className='d-flex justify-content-center'> 
      { error && <div> { error } </div>}
      { isPending && <div>Loading...</div>} 
      {
        drink ? (
          <DrinkRecipe idDrink={drink[0].idDrink} drink={drink[0]}  /> 
        ) : null
      }      
      
    </div> 
  )
}

export default DrinkPage