import './App.css';
import movieData from '../../movieData.js';
import {useState, useEffect} from 'react'
import AllMovies from '../AllMovies/AllMovies.js'
import MovieDetail from '../MovieDetails/MovieDetail';

const App = () => {
  const [movies, setMovies] = useState(movieData)
  const [allMoviesView, setAllMoviesView] = useState(true)
  const [singleMovieView, setSingleMovieView] = useState(false)
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null)
  
const getAllMovieData = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => console.log(data))
}
  useEffect(() => {
    getAllMovieData()
  },[])


  const handleClick = (id) => {
    let movie = movieData.movies.find(movie => {
      return movie.id === id
    })
    setAllMoviesView(false)
    setSingleMovieView(true)
    setSelectedMovieDetails(movie)
  }

  const goHome = () => {
    setAllMoviesView(true)
    setSingleMovieView(false)
  }

  return (
    <div className="App">
      {allMoviesView ? <AllMovies movies={movies} handleClick={handleClick}/> : <MovieDetail movieDetail={selectedMovieDetails} goHome={goHome}/>}
    </div>
  );
}

export default App;
