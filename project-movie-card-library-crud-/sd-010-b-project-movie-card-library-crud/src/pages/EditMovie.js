import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: '',
      shouldRedirect: false,
    };
  }

  componentDidMount = () => {
    this.CatchMovie();
  }

  CatchMovie = async () => {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ loading: false, movie });
  }

  handleSubmit = async (updatedMovie) => {
    this.setState({ loading: true });
    await movieAPI.updateMovie(updatedMovie);
    this.setState({ shouldRedirect: true, loading: false });
  }

  render() {
    const { shouldRedirect, movie, loading } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="edit-movie">
        {(loading)
          ? <Loading />
          : <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />}
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default EditMovie;
