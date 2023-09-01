import "./App.css";
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
        setLoading(false)
      });
  };

  useEffect(() => {
    getAllMovieData();
  }, []);


  return (
    <div className="App">
      {console.log(error, 'error in App return', loading, 'loading in App return')}
      <NavBar />
      {loading ? (
        <p>Loading...</p>
       ) : (
      <Routes>
        <Route path="/" element={<AllMovies movies={movies} error={error}/>}/>
        <Route path="/:id" element={<MovieDetail />}/>
      </Routes>
      )}
    </div>
  );
};

export default App;
