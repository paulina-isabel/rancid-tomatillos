import './MovieCard.css'

const MovieCard = ({handleClick, id, poster_path, title, release_date}) => {
  return (
    <div className='card' onClick={() => handleClick(id)} id={id}>
      <img src={poster_path}/>
      <h2>{title}</h2>
      <h3>{release_date}</h3>

    </div>
  )
}

export default MovieCard