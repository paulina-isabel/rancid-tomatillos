import "./MovieCard.css";
import PropTypes from "prop-types";
import star from '../../images/star.png'
import { Link } from 'react-router-dom';

const MovieCard = ({ id, poster_path, title, release_date, rating }) => {
  return (
    <Link to={`/${id}`}>
      <div className="card" id={id}>
        <img className="image" src={poster_path} name="movie-poster" alt={title}/>
        <h2>{title} ({release_date})</h2>
        <h3>{rating}/10 <img src={star} className='star' alt='star rating icon'/></h3>
      </div>
    </Link>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  average_rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired
}