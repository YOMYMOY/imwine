import { useState } from 'react'
import { CartCanvas } from '../CartCanvas'
import styles from './index.module.css'
import { Button } from 'react-bootstrap';

const Header = () => {

  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  return (
    <header className={`d-flex justify-content-around py-5 ${styles.header}`}>
      <h1>Search Drinks</h1>
      <Button variant='outline-light' size='lg' onClick={handleShowCart}>
        <i className="fas fa-cart-plus"></i>
      </Button>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
    </header>
  )
}

export default Header
