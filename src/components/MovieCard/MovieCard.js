import './MovieCard.css'

function MovieCard({handleClick, goHome, id, poster_path, title, release_date}) {
  return (
  <div className='card' onClick={() => handleClick(id)} id={id}>
    <img src={poster_path}/>
    <h2>{title}</h2>
    <h3>{release_date}</h3>
    <button onClick={goHome}>Go Back Home</button>
  </div>
  )
}

export default MovieCard