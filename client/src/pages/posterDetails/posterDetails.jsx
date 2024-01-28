// PosterDetails.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import styles from './posterDetails.module.scss';
import { Undernav, Genre } from '../../components';

const PosterDetails = () => {
    const location = useLocation();
    const { slug } = useParams();

    const [loading, setLoading] = useState(true);
    const [poster, setPoster] = useState(null);
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 3800 });
    const [quantity, setQuantity] = useState(0); // State to track the quantity

    useEffect(() => {
        const fetchPosterDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/posters/${slug}?attributes=name,description,image`);
                const posterData = await response.json();
                setPoster(posterData);
                console.log(posterData);
            } catch (error) {
                console.error('Error fetching poster details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosterDetails();
    }, [slug]);

    if (loading) {
        return <p>Loading...</p>;
    }

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

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 0)); // Parse the value as an integer
    };

    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };

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
                <div className={styles.posterDetails}>
                    {poster ? (
                        <div className={styles.details}>
                            <img src={poster.image} alt={poster.image} />
                            <div className={styles.text}>
                                <h2>{poster.name}</h2>
                                <p>{stripHtmlTags(poster.description)}</p>
                                <p>Kr. {poster.price},00</p>
                                <input type="number" value={quantity} onChange={handleQuantityChange} />
                                <button onClick={() => handleAddToCart(poster, quantity)}>Læg i kurv</button>
                                <br />
                                <Link to="/posters">Tilbage til plakater</Link>
                            </div>
                        </div>
                    ) : (
                        <p>Error loading poster details</p>
                    )}
                </div>
            </main>
        </>
    );
};

export default PosterDetails;
