import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormImagePath from './form-add-movie/FormImagePath';
import FormRating from './form-add-movie/FormRating';
import FormTitle from './form-add-movie/FormTitle';
import FormSubtitle from './form-add-movie/FormSubtitle';
import FormGenre from './form-add-movie/FormGenre';
import FormStoryline from './form-add-movie/FormStoryline';

const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = inicialState;
  }

  handleOnChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  newMovie = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(inicialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <FormTitle
          value={ title }
          onChange={ this.handleOnChange }
        />
        <FormSubtitle
          value={ subtitle }
          onChange={ this.handleOnChange }
        />
        <FormImagePath
          value={ imagePath }
          onChange={ this.handleOnChange }
        />
        <FormStoryline
          value={ storyline }
          onChange={ this.handleOnChange }
        />
        <FormRating
          value={ rating }
          onChange={ this.handleOnChange }
        />
        <FormGenre
          value={ genre }
          onChange={ this.handleOnChange }
        />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.newMovie }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default AddMovie;
