import "./App.css";
import movieData from "../../movieData.js";
import { useState, useEffect } from "react";
import AllMovies from "../AllMovies/AllMovies.js";
import MovieDetail from "../MovieDetails/MovieDetail";
import NavBar from "../NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false);

  const getAllMovieData = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server returned " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    getAllMovieData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      {loading ? (
        <p>Loading...</p>
       ) : (
      <Routes>
        <Route path="/" element={<AllMovies movies={movies} />}/>
        <Route path="/:id" element={<MovieDetail />}/>
      </Routes>
      )}
    </div>
  );
};

export default App;
