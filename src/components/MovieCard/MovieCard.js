import "./MovieCard.css";
import PropTypes from "prop-types";
import star from '../../images/star.png'
import { useParams, Link } from 'react-router-dom';

const MovieCard = ({ handleClick, id, poster_path, title, release_date, rating }) => {
  return (
    <Link to={`/${id}`}>
      <div className="card" onClick={() => handleClick(id)} id={id}>
        <img className="image" src={poster_path} name="movie-poster" alt={title}/>
        <h2>{title} ({release_date})</h2>
        <h3>{rating}/10 <img src={star} className='star' alt='star rating icon'/></h3>
      </div>
    </Link>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  release_date: PropTypes.string
}