import styles from '../styled/NavBar.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    const bar = document.getElementById('bar')
    const close = document.getElementById('close')
    setIsOpen(!isOpen)
    if (isOpen) {
      bar.style.display = 'none'
      close.style.display = 'block'
    } else if (isOpen === false) {
      bar.style.display = 'block'
      close.style.display = 'none'
    }
  }

  const handleClose = () => {
    handleMenu()
    document.getElementById('check').click()
  }

  useEffect(() => {
    handleMenu()
    document.getElementById('close').style.display = 'none'
  }, [])

  return (
    <div className={styles.nav}>
      <nav className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <h1>E-COMMERCE</h1>
        </div>
        <input type='checkbox' id='check' className={styles.nav_menu} />
        <label htmlFor='check' className={styles.nav_label} onClick={() => handleMenu()}>
          <i className='fa-solid fa-bars' id='bar'></i>
          <i className='fa-solid fa-xmark' id='close'></i>
        </label>
        <div className={styles.nav_options} id='nav_options'>
          <Link onClick={() => handleClose()} to='/'>
            <i className='fa-solid fa-airplay'></i>
            <i className='fa-solid fa-cart-shopping'></i>
          </Link>
          <button>Sing Out</button>
        </div>
      </nav>
    </div>
  )
}

export default Header
