// Posters.jsx
import React, { useState, useEffect } from 'react';
import styles from './posters.module.scss'
import Genre from '../../components/genre/genre';

const Posters = () => {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        const fetchPosters = async () => {
            try {
                const response = await fetch('http://localhost:3000/posters/'); // Replace with your API endpoint
                const postersData = await response.json();
                setPosters(postersData);
                console.log(postersData);
            } catch (error) {
                // Handle error, e.g., show an error message to the user
                console.error('Error fetching posters:', error);
            }
        };

        fetchPosters();
    }, []); // The empty dependency array ensures the effect runs only once when the component mounts

    return (
        <div className={styles.posters}>
            <Genre />
            <ul>
                {posters.map((poster) => (
                    <li key={poster.id}>
                        <img src={poster.image} alt={poster.image} />
                        <p>{poster.name}</p>
                        <p>Kr. {poster.price},00</p>
                        <button>Læg i kurv</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Posters;
