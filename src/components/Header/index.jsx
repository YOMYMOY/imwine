import styles from './index.module.css'

const Header = () => {
  return (
    <header className={`py-5 ${styles.header}`}>
      <h1>Search Drinks</h1>
    </header>
  )
}

export default Header
