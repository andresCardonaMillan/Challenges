import React, { useState, useEffect } from "react";
import '../styles/componentes.css';

export const GifGrid = ({ category }) => {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        const fetchGifs = async () => {
            try {
                const url = `https://api.giphy.com/v1/gifs/search?api_key=DMlIDP8qntl90IPQItlCyeNqm6XmgDy5&q=${category}&limit=1&offset=0&rating=g&lang=en`;
                const resp = await fetch(url);
                const { data } = await resp.json();
                
                if (data && Array.isArray(data)) {
                    const gifs = data.map((img) => ({
                        id: img.id,
                        title: img.title,
                        url: img.images.downsized_medium.url
                    }));
                    const gifsWithUrls = gifs.filter(gif => gif.url); //Filtra Gift
                    setGifs(gifsWithUrls);
                } else {
                    console.error("Error fetching GIFs: No data received or data is not in the expected format.");
                }
            } catch (error) {
                console.error("Error fetching GIFs:", error);
            }
        };
        

        fetchGifs();
    }, [category]);

    return (
        <div className="container">
            <div className="gif-grid">
                <h3>{category}</h3>
                <div className="gif-list">
                    {gifs.map((gif) => (
                        <GifItem key={gif.id} gif={gif} />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Componente GifItem para manejar la impresión de cada título de GIF
const GifItem = ({ gif }) => {
    return (
        <div className="gif-item">
            <img src={gif.url} alt={gif.title} />
            <p>{gif.title}</p>
        </div>
    );
};
