import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';

const AllMovies = ({ movies, handleClick, goHome }) => {
  const allMovies = movies.movies.map(movie => {
    return (
      <MovieCard 
        id={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={movie.release_date}
        key={movie.id}
        handleClick={handleClick}
        goHome={goHome}
      />
    )
  })

  return (
    <div className='card-container'>
      {allMovies}
    </div>
  )
}

export default AllMovies

AllMovies.propTypes = {
  movies: PropTypes.object,
  handleClick: PropTypes.func,
  goHome: PropTypes.func
}