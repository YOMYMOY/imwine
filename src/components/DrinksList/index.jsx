import { Row } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"
import { DrinkCard } from "../DrinkCard"


export const DrinksList = () => {
  
    const { drinks } = useDrinks()
  
    return (
    <Row className="mb-5 mt-3">
        
        {
            drinks.map((drink) => (
                <DrinkCard key={drink.idDrink} drink={drink} />
            ))
        }
    </Row>
  )
}
