import './MovieCard.css'

function MovieCard({id, poster_path, title, release_date}) {
  return (
  <div className='card'>
    <img src={poster_path}/>
    <h2>{title}</h2>
    <h3>{release_date}</h3>
  </div>
  )
}

export default MovieCard