import "./MovieDetail.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const MovieDetail = ({ goHome, selectedMovieId }) => {
  const [selectedMovieDetails, setSelectedMovieDetails] = useState({});
  const [detailsLoading, setDetailsLoading] = useState(true);
  const [detailsError, setDetailsError] = useState(false);

  const getSingleMovieData = (selectedMovieId) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${selectedMovieId}`)
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
    getSingleMovieData(selectedMovieId);
  }, [selectedMovieId]);

  const backgroundImageUrl = selectedMovieDetails.backdrop_path;

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      {detailsError ? <p>uh oh</p> : <p>all good</p>}
      {detailsLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={goHome}>Go Back Home</button>{" "}
          <p className="title"></p>
        </>
      )}
      <p>{selectedMovieDetails.overview}</p>
      <p>{selectedMovieDetails.release_date}</p>
      <p>Runtime: {selectedMovieDetails.runtime}</p>
    </div>
  );
};

export default MovieDetail;

MovieDetail.propTypes = {
  goHome: PropTypes.func,
  selectedMovieId: PropTypes.number
}