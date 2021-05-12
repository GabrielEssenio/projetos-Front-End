import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, genre, rating, id } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <img src={ imagePath } alt={ title } />
        <h4>{storyline}</h4>
        <h4>{genre}</h4>
        <h4>{rating}</h4>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
