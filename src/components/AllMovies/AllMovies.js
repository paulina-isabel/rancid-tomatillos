import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';
import Error from '../Error/Error'
import { useState, useEffect } from 'react';


import { correctReleaseDate } from '../../helperFunctions';

const AllMovies = ({ movies, error }) => {
  const [selectedOption, setSelectedOption] = useState("Select an option")
  const [allMovies, setAllMovies] = useState([])
  
  let clip

  if (movies.movies) {
    clip = allMovies.map(movie => {
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
    
    const handleDropdownChange = () => {
     sortMovies(movies, selectedOption)
    };
    
    useEffect(() => {
      console.log("useEffect IS IN THE BUILDING")
    setAllMovies(movies.movies)
  }, [movies])
  
  const sortMovies = (movies, selectedOption) => {
    const sortedMovies =  movies.movies.sort((a, b) => {
      if (selectedOption === "High") {
        return b.average_rating - a.average_rating
      } else if (selectedOption === "Low") {
          return a.average_rating - b.average_rating
      }
    })
      setAllMovies(sortedMovies)
  }
  // let sortedMovies = sortMovies(movies)
  
  return (
  <div>
    <div>
      <label htmlFor="dropdown">Sort By:</label>
      <select id="dropdown" value={selectedOption} onChange={(event) => setSelectedOption(event.target.value)} onClick={handleDropdownChange}>
        <option>Select an option</option>
        <option value="High">High to Low</option>
        <option value="Low">Low to High</option>
      </select>
    </div>
    <div className='card-container'>
      {error ? (
        <Error />
      ) : (
        clip
      )}
    </div>
  </div>
  )
}

export default AllMovies

AllMovies.propTypes = {
  movies: PropTypes.object,
}