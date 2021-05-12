import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: {
      title,
      rating,
      subtitle,
      storyline,
      imagePath } } = this.props;
    return (
      <li>
        <img src={ imagePath } alt={ title } />
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
        <div>
          <Rating rating={ rating } />
        </div>
      </li>
    );
  }
}

MovieCard.propTypes = ({
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
});

export default MovieCard;
