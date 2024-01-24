// Undernav.jsx
import React, { useState } from 'react';
import styles from './undernav.module.scss';

const Undernav = ({ onSortChange }) => {
    const [selectedOptionName, setSelectedOptionName] = useState("Sorter");

    const handleSortChange = (event) => {
        const selectedValue = event.target.dataset.value;
        onSortChange(selectedValue);
        setSelectedOptionName(event.target.textContent);
    };

    return (
        <nav className={styles.undernav}>
            <h2>Plakater</h2>
            <div className={styles.custom_dropdown}>
                <span className={styles.selected_option}>{selectedOptionName}</span>
                <div className={styles.options} onClick={handleSortChange}>
                    <div className={styles.option} data-value="ascending">Pris - stigende</div>
                    <div className={styles.option} data-value="descending">Pris - faldende</div>
                    <div className={styles.option} data-value="title">Titel</div>
                </div>
            </div>
        </nav>
    );
};

export default Undernav;