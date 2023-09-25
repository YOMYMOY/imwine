import { Button, Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import useDrinks from '../../hooks/useDrinks';

export const DrinkCard = ({drink}) => {
  const {getRecipe}  = useDrinks()
  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={drink.strDrinkThumb}
                alt={`Imagen de ${drink.strDrink}`}
            />
            <Card.Body>
                <Card.Title>
                    {drink.strDrink}
                </Card.Title>
                <Button
                    variant={"warning"}
                    className='w-100 text-uppercase mt-2'
                    onClick={() => getRecipe(drink.idDrink)}
                >
                    Ver receta
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes = {
    drink : PropTypes.object.isRequired
}
