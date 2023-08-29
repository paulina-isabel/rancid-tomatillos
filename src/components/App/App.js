import "./App.css";
import movieData from "../../movieData.js";
import { useState, useEffect } from "react";
import AllMovies from "../AllMovies/AllMovies.js";
import MovieDetail from "../MovieDetails/MovieDetail";
import NavBar from "../../NavBar/NavBar";

const App = () => {
  const [movies, setMovies] = useState(movieData);
  const [allMoviesView, setAllMoviesView] = useState(true);
  // const [singleMovieView, setSingleMovieView] = useState(false);
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
    setAllMoviesView(false);
    // setSingleMovieView(true);
  };

  const goHome = () => {
    setAllMoviesView(true);
    // setSingleMovieView(false);
  };

  return (
    <div className="App">
      <NavBar />
      {allMoviesView ? (
        <AllMovies movies={movies} handleClick={handleClick} />
      ) : (
        <MovieDetail goHome={goHome} selectedMovieId={selectedMovieId} />
      )}
    </div>
  );
};

export default App;
