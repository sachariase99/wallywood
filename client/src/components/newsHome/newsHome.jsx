// HomePage.jsx
import React, { useState, useEffect } from 'react';
import styles from './newsHome.module.scss';

const NewsHome = () => {
    const [newestPosters, setNewestPosters] = useState([]);

    useEffect(() => {
        const fetchPosters = async () => {
            try {
                // Fetch posters with specific attributes and limit
                const url = 'http://localhost:3000/posters?attributes=name,description,image&limit=2';
                const response = await fetch(url);
                const postersData = await response.json();
                setNewestPosters(postersData);
            } catch (error) {
                console.error('Error fetching posters:', error);
            }
        };

        fetchPosters();
    }, []);

    // Helper function to strip HTML tags
    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };

    return (
        <div className={styles.newsHome}>
            <h2>Sidste nyt...</h2>
            <ul>
                {newestPosters.map((poster, index) => (
                    <li key={poster.id || index}>
                        <img src={poster.image} alt={poster.image} />
                        <div>
                            <h3>{poster.name}</h3>
                            <p>{stripHtmlTags(poster.description)}</p>
                            <button>Læs mere</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsHome;
