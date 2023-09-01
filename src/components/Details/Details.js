import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.png';
import Error from '../Error/Error';
import './Details.css'
import { correctReleaseDate } from '../../helperFunctions';

const Details = ({ selectedMovieDetails, detailsError }) => {
  const posterImage = selectedMovieDetails.poster_path;

  return (
    <div>
      {detailsError ? (
        <Error />
      ) : ( 
        <div className='details-container'>
          <div className='back-home-link'>
            <Link to="/">
              <img src={arrow} className='arrow' alt='back arrow icon'/>
            <p>GO BACK TO HOME PAGE</p>
            </Link>
          </div>
          <h1 className="title">{selectedMovieDetails.title}</h1>
          <img src={posterImage} className='poster' alt={selectedMovieDetails.title}/>
          <h2 className="overview">{selectedMovieDetails.tagline}</h2>
          <p className="overview">{selectedMovieDetails.overview}</p>
          <p className="release-date">Released in {correctReleaseDate(selectedMovieDetails.release_date)}</p>
          <p>Runtime: {selectedMovieDetails.runtime} minutes</p>
        </div>
      )}
    </div>
  )
}

export default Details