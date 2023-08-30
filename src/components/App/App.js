import "./App.css";
import movieData from "../../movieData.js";
import { useState, useEffect } from "react";
import AllMovies from "../AllMovies/AllMovies.js";
import MovieDetail from "../MovieDetails/MovieDetail";
import NavBar from "../NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState(movieData);
  const [error, setError] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const getAllMovieData = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server returned " + response.status);
        }
        return response.json();
      })
      .then((data) => setMovies(data))
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    getAllMovieData();
  }, []);

  const handleClick = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<AllMovies movies={movies} handleClick={handleClick} />}/>
        <Route path="/:id" element={<MovieDetail selectedMovieId={selectedMovieId} />}/>
      </Routes>
    </div>
  );
};

export default App;
