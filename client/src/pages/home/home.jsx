import React from 'react'
import styles from './home.module.scss'
import curtain from '../../assets/curtain.jpg'
import { NewsHome } from '../../components'

const Home = () => {
  return (
    <main className={styles.home}>
      <img src={curtain} alt="curtain" />
      <NewsHome />
    </main>
  )
}

export default Home
