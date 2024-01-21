import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import styles from './topnav.module.scss'

const Topnav = () => {
  return (
    <div className={styles.topnav}>
      <IoCartOutline className={styles.icon} />
    </div>
  )
}

export default Topnav
