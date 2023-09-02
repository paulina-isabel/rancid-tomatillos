import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';
import Error from '../Error/Error';
import { correctReleaseDate } from '../../helperFunctions';

const AllMovies = ({ movies, error }) => {
  let allMovies

  if (movies.movies) {
    allMovies = movies.movies.map(movie => {
      return (
        <MovieCard 
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={correctReleaseDate(movie.release_date)}
          rating={movie.average_rating}
          key={movie.id}
        />
      )
    })
  }
  
  return (
    <div className='card-container'>
      {error ? (
        <Error />
      ) : (
        allMovies
      )}
    </div>
  )
}

export default AllMovies

AllMovies.propTypes = {
  movies: PropTypes.shape({
    average_rating: PropTypes.number,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string
  }),
  error: PropTypes.bool.isRequired
}