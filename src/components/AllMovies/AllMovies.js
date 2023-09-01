import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';
import Error from '../Error/Error'
import { useState, useEffect } from 'react';


import { correctReleaseDate } from '../../helperFunctions';

const AllMovies = ({ movies, error }) => {
  const [selectedOption, setSelectedOption] = useState("")
  
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

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
    allMovies = sortMovies(movies, selectedOption)
  };

    useEffect(() => {
      sortMovies(movies, selectedOption)
    }, [selectedOption])

  const sortMovies = (movies, selectedOption) => {
    return movies.movies.sort((a, b) => {
      if (selectedOption === "High") {
        return a.average_rating - b.average_rating
      } else if (selectedOption === "Low") {
          return b.average_rating - a.average_rating
      }
    })
  }
  let sortedMovies = sortMovies(movies)
  
  return (
  <div>
    <div>
      <label htmlFor="dropdown">Sort By:</label>
      <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
        <option>Select an option</option>
        <option value="High">High to Low</option>
        <option value="Low">Low to High</option>
      </select>
    </div>
    <div className='card-container'>
      {error ? (
        <Error />
      ) : (
        allMovies
      )}
    </div>
  </div>
  )
}

export default AllMovies

AllMovies.propTypes = {
  movies: PropTypes.object,
}