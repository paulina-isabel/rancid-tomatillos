import './MovieDetail.css'

const MovieDetail = ({ movieDetail, goHome }) => {
  const backgroundImageUrl = movieDetail.movie.backdrop_path

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }

  return (
    <div style={containerStyle}>
      <p className="title">{movieDetail.movie.title}</p>
      <p>{movieDetail.movie.overview}</p>
      <p>{movieDetail.movie.release_date}</p>
      <p>Runtime: {movieDetail.movie.runtime}</p>
      <button onClick={goHome}>Go Back Home</button>
    </div>
  )
}

export default MovieDetail