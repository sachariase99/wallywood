import React from 'react'
import styles from './nav.module.scss'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className={styles.nav}>
            <Link className={styles.headertext} to="/">Wallywood</Link>
            <ul>
                <li><NavLink className={styles.link} to="/">Home</NavLink></li>
                <li><NavLink className={styles.link} to="/posters">Plakater</NavLink></li>
                <li><NavLink className={styles.link} to="/about">Om os</NavLink></li>
                <li><NavLink className={styles.link} to="/contact">Kontakt</NavLink></li>
                <li><NavLink className={styles.link} to="/login">Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
