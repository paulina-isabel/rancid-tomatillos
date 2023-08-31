import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';
import Error from '../Error/Error';

const AllMovies = ({ movies, error }) => {
  let allMovies

  if (movies.movies) {
    allMovies = movies.movies.map(movie => {
      return (
        <MovieCard 
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
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
  movies: PropTypes.object,
}