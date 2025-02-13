import styles from './App.module.css';
import Input from './components/Input/Input';
import Card from './components/Card/Card';

import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const inputRef = useRef(null);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length >= 3) {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);
        const data = await response.json();
        if (data.results) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        setResults([]); 
      }
    } else {
      setResults([]);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <Input ref={inputRef} value={query} onChange={handleInputChange} />
        <div className={styles.textContainer}>
          {query.length >= 3 && Array.isArray(results) && (
            <p className={styles.additionalText}>Found characters: {results.length}</p>)}
        </div>
      </div>
      {Array.isArray(results) && results.length > 0 && (
        <div className={styles.newCardsContainer}>
          {results.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species = {character.species}
              status={character.status}
              created={character.created}
            />
          ))}
      </div>
      )}
    </div>
  );
}

export default App;
