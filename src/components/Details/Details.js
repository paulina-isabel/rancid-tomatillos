import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.png';
import Error from '../Error/Error';

const Details = ({ selectedMovieDetails, detailsError }) => {
  return (
    <div>
      {detailsError ? (
        <Error />
      ) : ( 
        <>
          {console.log(detailsError, 'this is details error in details page')}
          <Link to="/">
            <img src={arrow} className='arrow' alt='back arrow icon'/>
          </Link>
          <p className="title"></p>
          <p>{selectedMovieDetails.overview}</p>
          <p>{selectedMovieDetails.release_date}</p>
          <p>Runtime: {selectedMovieDetails.runtime} minutes</p>
        </>
      )}
    </div>
  )
}

export default Details