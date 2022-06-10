import styles from "../styled/NavBar.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import closeIcon from "../styled/Images/equis.png";
import barIcon from "../styled/Images/menu.png";
import logoutIcon from "../styled/Images/logout.png";
import cartIcon from "../styled/Images/cart.png";
import { logoutAsync } from "../redux/actions/actionLogin";
import { useDispatch } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch();

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
          <Link to="/"><h1>E-COMMERCE</h1></Link>
        </div>
        <input type="checkbox" id="check" className={styles.nav_menu} />
        <label htmlFor="check" className={styles.nav_label} onClick={() => handleMenu()}>
          <img src={barIcon} alt="bar" id="bar" />
          <img src={closeIcon} alt="close" id="close" />
        </label>
        <div className={styles.nav_options} id="nav_options">
          <Link onClick={() => handleClose()} to="/">
            <img src={cartIcon} />
          </Link>
          <button onClick={() => dispatch(logoutAsync())}>
            <img src={logoutIcon} />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
