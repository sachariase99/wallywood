import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Topnav } from '../../components';
import styles from './nav.module.scss';

const Nav = () => {
    const location = useLocation();

    const isActive = (pathname) => location.pathname === pathname;

    return (
        <>
            <div>
                <Topnav />
                <nav className={styles.nav}>
                    <Link className={styles.headertext} to="/">Wallywood</Link>
                    <ul>
                        <li><NavLink className={styles.link} to="home" style={{ color: isActive('/') ? '#D97852' : '#524641' }}>Home</NavLink></li>
                        <li><NavLink className={styles.link} to="posters" style={{ color: isActive('/') ? '#D97852' : '#524641' }}>Plakater</NavLink></li>
                        <li><NavLink className={styles.link} to="about" style={{ color: isActive('/') ? '#D97852' : '#524641' }}>Om os</NavLink></li>
                        <li><NavLink className={styles.link} to="contact" style={{ color: isActive('/') ? '#D97852' : '#524641' }}>Kontakt</NavLink></li>
                        <li><NavLink className={styles.link} to="login" style={{ color: isActive('/') ? '#D97852' : '#524641' }}>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Nav;
