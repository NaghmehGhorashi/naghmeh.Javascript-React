import React, { useState, useEffect } from 'react';

function GameOfThronesCharacters() {
    const [characters, setCharacters] = useState([]); // State to store the fetched data
    const [loading, setLoading] = useState(true); // State to manage loading status

    // Fetch data from the API when the component mounts
    useEffect(() => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then((response) => response.json()) // Parse the JSON from the response
            .then((data) => {
                setCharacters(data); // Store the fetched data in state
                setLoading(false); // Set loading to false after the data is fetched
            })
            .catch((error) => {
                console.error("Error fetching Game of Thrones characters:", error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div>
            <h1>Game of Thrones Characters</h1>
            {loading ? (
                <p>Loading characters...</p> // Show a loading message while fetching data
            ) : (
                <ul>
                    {characters.map((character) => (
                        <li key={character.id}>
                            <h2>{character.fullName}</h2>
                            <img
                                src={character.imageUrl}
                                alt={character.fullName}
                                style={{ width: "150px", borderRadius: "8px" }}
                            />
                            <p>Title: {character.title}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GameOfThronesCharacters;
