import React from 'react'
import styles from './topnav.module.scss'
import cart from '../../assets/icon_cart.svg'

const Topnav = () => {
  return (
    <nav className={styles.topnav}>
      <img className={styles.icon} src={cart} alt="Cart" />
    </nav>
  )
}

export default Topnav
