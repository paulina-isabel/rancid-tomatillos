import './AllMovies.css'
import MovieCard from '../MovieCard/MovieCard'

function AllMovies({movies}) {
let allMovies = movies.movies.map(movie => {
  return (
    <MovieCard 
      id = {movie.id}
      poster_path = {movie.poster_path}
      title = {movie.title}
      release_date = {movie.release_date}
      key = {movie.id}

    />
  )
})
  return (
    <div className='movieCard'>
      {allMovies}
    </div>
  )
}

export default AllMovies