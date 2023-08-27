import './App.css';
import movieData from '../../movieData.js';
import {useState, useEffect} from 'react'
import AllMovies from '../AllMovies/AllMovies.js'
import MovieDetail from '../MovieDetails/MovieDetail';

const App = () => {
  const [movies, setMovies] = useState(movieData)
  const [allMoviesView, setAllMoviesView] = useState(true)
  const [singleMovieView, setSingleMovieView] = useState(false)
  
const getAllMovieData = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => setMovies(data))
}
  useEffect(() => {
    getAllMovieData()
  },[])

const [selectedMovieId, setSelectedMovieId] = useState(null)

  const handleClick = (id) => {
    setSelectedMovieId(id)
    setAllMoviesView(false)
    setSingleMovieView(true)
    // setSelectedMovieDetails(movie)
  }

  const goHome = () => {
    setAllMoviesView(true)
    setSingleMovieView(false)
  }

  return (
    <div className="App">
      {allMoviesView ? <AllMovies movies={movies} handleClick={handleClick}/> : <MovieDetail goHome={goHome} selectedMovieId={selectedMovieId}/> }
    </div>
  );
}

export default App;
