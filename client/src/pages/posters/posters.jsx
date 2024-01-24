// Posters.jsx
import React, { useState, useEffect } from 'react';
import styles from './posters.module.scss';
import { Genre, Undernav } from '../../components';

const Posters = () => {
    const [posters, setPosters] = useState([]);
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 3800 });

    useEffect(() => {
        const fetchPosters = async () => {
            try {
                const response = await fetch('http://localhost:3000/posters/');
                const postersData = await response.json();
                setPosters(postersData);
            } catch (error) {
                console.error('Error fetching posters:', error);
            }
        };

        fetchPosters();
    }, []);

    const handleSortChange = (selectedValue) => {
        setSelectedSort(selectedValue);
        let sortedPosters = [...posters];
        if (selectedValue === "ascending") {
            sortedPosters.sort((a, b) => a.price - b.price);
        } else if (selectedValue === "descending") {
            sortedPosters.sort((a, b) => b.price - a.price);
        } else if (selectedValue === "title") {
            sortedPosters.sort((a, b) => a.name.localeCompare(b.name));
        }
        setPosters(sortedPosters);
    };

    const handleGenreClick = (genre) => {
        setSelectedGenres((prevGenres) => {
            const isGenreSelected = prevGenres.some((selectedGenre) => selectedGenre.id === genre.id);
            const updatedGenres = isGenreSelected ? [] : [genre];
            return updatedGenres;
        });
    };

    const handlePriceChange = (minMax, value) => {
        setPriceRange((prevRange) => ({
            ...prevRange,
            [minMax]: value
        }));
    };

    const filteredPosters = posters.filter((poster) => {
        const genreMatch = selectedGenres.length === 0 || poster.genres.some((posterGenre) =>
            selectedGenres.some((selectedGenre) => selectedGenre.title === posterGenre.title)
        );
        const priceMatch = poster.price >= priceRange.min && poster.price <= priceRange.max;
        return genreMatch && priceMatch;
    });

    return (
        <>
            <Undernav onSortChange={handleSortChange} />
            <main className={styles.posters}>
                <Genre
                    onGenreClick={handleGenreClick}
                    selectedGenres={selectedGenres}
                    onPriceChange={handlePriceChange}
                    priceRange={priceRange}
                />
                <ul>
                    {filteredPosters.map((poster) => (
                        <li key={poster.id}>
                            <img src={poster.image} alt={poster.image} />
                            <p>{poster.name}</p>
                            <p>Kr. {poster.price},00</p>
                            <button>Læg i kurv</button>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default Posters;