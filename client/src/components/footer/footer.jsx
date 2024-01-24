import React from 'react'
import styles from './footer.module.scss'
import { FaSquarePinterest, FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
                <h2>Wallywood</h2>
                <p>Øster Uttrupvej 1</p>
                <p>9000 Aalborg</p>
            </div>
            <div className={styles.contact}>
                <p>CVR: 12345678</p>
                <p>MAIL: info@plakatshoppen.dk</p>
                <p>MOBIL: +45 0812 3456</p>
            </div>
            <div className={styles.socials}>
                <FaSquarePinterest />
                <FaInstagram />
                <FaFacebookSquare />
                <FaSquareTwitter />
            </div>
        </footer>
    )
}

export default Footer
