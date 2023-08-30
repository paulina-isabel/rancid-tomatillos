import "./MovieDetail.css";
import { useState, useEffect } from "react";
import arrow from '../../images/arrow.png'
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  const [selectedMovieDetails, setSelectedMovieDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(true);
  const [detailsError, setDetailsError] = useState(false);

  const selectedId = useParams().id;
  const backgroundImageUrl = selectedMovieDetails.backdrop_path;

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  };

  const getSingleMovieData = (movieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Server returned " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        setSelectedMovieDetails(data.movie);
        setDetailsLoading(false)
      })
      .catch((error) => {
        setDetailsError(true);
      });
  };

  useEffect(() => {
    getSingleMovieData(selectedId);
  }, [selectedId]);

  return (
    <div className="movie-detail-card" style={containerStyle}>
      <div className="overlay" >
        {/* {detailsError ? <p>uh oh</p>} */}
        {detailsLoading ? (
          <p>Loading...</p>
        ) : (
          <>
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
    </div>
  );
};

export default MovieDetail;