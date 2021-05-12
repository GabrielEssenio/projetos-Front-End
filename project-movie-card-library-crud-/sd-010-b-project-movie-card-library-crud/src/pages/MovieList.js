import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  apiFetch = async () => {
    const data = await movieAPI.getMovies();
    this.setState({ movies: data, loading: false });
  }

  componentDidMount = () => {
    this.apiFetch();
  }

  render() {
    const { movies, loading } = this.state;
    return (
      <div data-testid="movie-list" className="movie-list">

        {loading
          ? <Loading />
          : (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />))}
        <div>
          {!movies.length
            ? null
            : <Link to="/movies/new">ADICIONAR CARTÃO</Link>}
        </div>
      </div>
    );
  }
}

export default MovieList;
