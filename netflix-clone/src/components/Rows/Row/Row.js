import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios"; // Axios instance
import "./row.css"; // CSS file for Row styling
// import requests from "../../../utils/requests";
const Row = ({ title, fetchUrl, isLargeRow, isFirstRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    try {
      const trailerRequest = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      );
      const trailers = trailerRequest.data.results;
      if (trailers.length > 0) {
        const trailer = trailers.find(
          (trailer) => trailer.type === "Trailer" && trailer.site === "YouTube"
        );
        if (trailer) {
          setTrailerUrl(
            `https://www.youtube.com/embed/${trailer.key}?autoplay=1`
          );
        }
      }
    } catch (error) {
      console.error("Error fetching trailer", error);
    }
  };

  const handleClose = () => {
    setTrailerUrl("");
  };

  return (
    <div className={`row ${isFirstRow ? "row--first" : ""}`}>
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row__poster--large" : ""}`}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && (
        <div className="row__modal">
          <button className="row__modalClose" onClick={handleClose}>
            X
          </button>
          <iframe
            title="Trailer"
            src={trailerUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Row;
