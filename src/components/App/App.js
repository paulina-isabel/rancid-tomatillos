import './App.css';
import movieData from '../../movieData.js';
import {useState} from 'react'
import AllMovies from '../AllMovies/AllMovies.js'
import MovieDetail from '../MovieDetails/MovieDetail';

function App() {
  const movieDetail = {
    "movie": {
      id: 1, 
      title: "Fake Movie Title", 
      poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
      backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
      release_date: "2019-12-04", 
      overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
      average_rating: 6, 
      genres: ["Drama"], 
      budget:63000000, 
      revenue:100853753, 
      runtime:139, 
      tagline: "It's a movie!" 
    }
  }

  const [movies, setMovies] = useState(movieData)
  console.log(typeof movieData)
  
  return (
    <div className="App">
      <AllMovies movies={movies} />
      <MovieDetail movieDetail={movieDetail}/>
    </div>
  );
}

export default App;
