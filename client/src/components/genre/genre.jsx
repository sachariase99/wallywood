// Genre.jsx
import React from 'react';
import styles from './genre.module.scss';

const Genre = ({ onGenreClick, selectedGenres, onPriceChange, priceRange }) => {
  const genres = [
    { id: 1, title: "Action" },
    { id: 2, title: "Adventure" },
    { id: 3, title: "Dokumentar" },
    { id: 4, title: "Drama" },
    { id: 5, title: "Gyser" },
    { id: 6, title: "Karatefilm" },
    { id: 7, title: "Komedie" },
    { id: 8, title: "Krigsfilm" },
    { id: 9, title: "Krimi - Thriller" }
  ];

  const handleGenreClick = (genre) => {
    onGenreClick(genre);
  };

  const handlePriceChange = (event, minMax) => {
    const { value } = event.target;
    onPriceChange(minMax, value !== '' ? Number(value) : '');
  };

  return (
    <div className={styles.genre}>
      <h2>Filtre</h2>
      <ul className={styles.filters}>
        <h3>Genre</h3>
        {genres.map(genre => (
          <li
            key={genre.id}
            className={selectedGenres.some(selectedGenre => selectedGenre.id === genre.id) ? styles.selected : ''}
            onClick={() => onGenreClick(genre)}
          >
            {genre.title}
          </li>
        ))}
      </ul>
      <div className={styles.price}>
        <div className={styles.inputs}>
          <input type="text" value={priceRange.min} onChange={(event) => handlePriceChange(event, 'min')} />
          <span>-</span>
          <input type="text" value={priceRange.max} onChange={(event) => handlePriceChange(event, 'max')} />
          <p>kr</p>
        </div>
      </div>
    </div>
  );
}

export default Genre;
