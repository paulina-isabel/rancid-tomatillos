import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';
import { useState } from 'react';

const AllMovies = ({ movies, error }) => {

  console.log(error, 'error in AllMovies')

  const allMovies = movies.movies.map(movie => {
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
  
  return (
    <div className='card-container'>
      {console.log(error, 'error in return')}
      {error ? (
      <p className='details-error-msg'> oops </p>
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