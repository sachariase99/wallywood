import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Topnav } from '../../components';
import styles from './nav.module.scss';

const Nav = () => {
    const location = useLocation();

    const isActive = (pathname) => location.pathname === pathname;

    return (
        <div>
            <Topnav />
            <nav className={styles.nav}
                <NavLink className={styles.headertext} to="/">Wallywood</NavLink>
                <ul>
                    <li><NavLink className={styles.link} to="/" style={{ color: isActive('/') ? '#D97852' : '#524641' }}>Home</NavLink></li>
                    <li><NavLink className={styles.link} to="/posters" style={{ color: isActive('/posters') ? '#D97852' : '#524641' }}>Plakater</NavLink></li>
                    <li><NavLink className={styles.link} to="/about" style={{ color: isActive('/about') ? '#D97852' : '#524641' }}>Om os</NavLink></li>
                    <li><NavLink className={styles.link} to="/contact" style={{ color: isActive('/contact') ? '#D97852' : '#524641' }}>kontakt</NavLink></li>
                    <li><NavLink className={styles.link} to="/login" style={{ color: isActive('/login') ? '#D97852' : '#524641' }}>login</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
