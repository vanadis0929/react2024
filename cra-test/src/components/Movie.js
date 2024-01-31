import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Movie = ({ poster, title, genres, summary }) => {
  return (
    <div>
      <figure>
        <img src={poster} alt={`${title}'s poster`} />
        <figcaption>
          <Link to="/movie"> {title} </Link>
        </figcaption>
      </figure>
      <ul>
        {genres
          ? genres.map((genre) => {
              return <li key={genre}>{genre}</li>;
            })
          : null}
      </ul>
      <p>{summary}</p>
    </div>
  );
};

Movie.propTypes = {
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
};

export default Movie;
