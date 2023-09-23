import styles from './index.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; I'm wine {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
