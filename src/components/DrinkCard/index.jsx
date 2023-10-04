import { Button, Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import useDrinks from '../../hooks/useDrinks';
import styles from './index.module.css'
import useCart from '../../hooks/useCart';
import { types } from '../../types'

export const DrinkCard = ({drink}) => {
  const { handleIdDrinkClick, handleShowModalClick }  = useDrinks()
  const { dispatch } = useCart()

    const handleAddCart = () => {
        dispatch({
            type : types.addItem,
            payload : drink
        })
    }

  return (
    <Col md={6} lg={3}>
        <Card className='mb-4'>
            <Card.Img
                variant='top'
                src={drink.strDrinkThumb}
                alt={`Imagen de ${drink.strDrink}`}
            />
            <Card.Body>
                <Card.Title className={styles.title}>
                    {drink.strDrink}
                </Card.Title>
                <Button
                    variant={"warning"}
                    className='w-100 text-uppercase mt-2'
                    onClick={() => {
                        handleIdDrinkClick(drink.idDrink)
                        handleShowModalClick()
                    }
                    }
                >
                    Ver receta
                </Button>
                <Button
                    variant={"danger"}
                    className='w-100 text-uppercase mt-2'
                    onClick={handleAddCart}
                >
                    Comprar
                </Button>
            </Card.Body>
        </Card>
    </Col>
  )
}

DrinkCard.propTypes = {
    drink : PropTypes.object.isRequired
}
