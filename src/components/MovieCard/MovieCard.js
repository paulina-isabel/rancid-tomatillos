import "./MovieCard.css";
import PropTypes from "prop-types";

const MovieCard = ({ handleClick, id, poster_path, title, release_date }) => {
  return (
    <div className="card" onClick={() => handleClick(id)} id={id}>
      <img className="image" src={poster_path} />
      <h2>{title}</h2>
      <h3>{release_date}</h3>
    </div>
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