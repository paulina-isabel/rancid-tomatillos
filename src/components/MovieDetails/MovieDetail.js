import "./MovieDetail.css";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Details from "../Details/Details";

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
        setDetailsLoading(false)        
      });
  };

  useEffect(() => {
    getSingleMovieData(selectedId);
  }, [selectedId]);

  return (
    <div className="movie-detail-card" style={containerStyle}>
      <div className="overlay" >
        {detailsLoading ? (
          <p>Loading...</p>
        ) : (
          <Details selectedMovieDetails={selectedMovieDetails} detailsError={detailsError} />
        )}
      </div>
    </div>
  );
};

export default MovieDetail;