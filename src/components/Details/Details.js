import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.png';
import Error from '../Error/Error';
import './Details.css'

const Details = ({ selectedMovieDetails, detailsError }) => {
  const posterImage = selectedMovieDetails.poster_path;

  return (
    <div>
      {console.log(selectedMovieDetails)}
      {detailsError ? (
        <Error />
      ) : ( 
        <div className='details-container'>
          <Link to="/">
            <img src={arrow} className='arrow' alt='back arrow icon'/>
          </Link>
          <img src={posterImage} className='poster' alt='movie-poster'/>
          <h1 className="title">{selectedMovieDetails.title}</h1>
          <h2 className="overview">{selectedMovieDetails.tagline}</h2>
          <p className="overview">{selectedMovieDetails.overview}</p>
          <p className="release-date">Released in {selectedMovieDetails.release_date}</p>
          <p>Runtime: {selectedMovieDetails.runtime} minutes</p>
        </div>
      )}
    </div>
  )
}

export default Details