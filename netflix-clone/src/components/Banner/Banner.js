import React, { useState, useEffect } from "react";
import axios from "../../utils/axios"; // Import axios instance
import requests from "../../utils/requests"; // Import API requests
import "./banner.css"; // Import Banner styling

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch the Netflix Originals
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie); // Set the selected random movie to the state
      return request;
    }
    fetchData();
  }, []);

  // Function to truncate long movie descriptions
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* Movie Title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Banner Buttons */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* Movie Description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      {/* Fade effect for the bottom of the banner */}
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
