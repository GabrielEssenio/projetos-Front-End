import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  handleOnClick = (estado) => {
    this.setState((previous) => ({ movies: [...previous.movies, estado] }));
  }

  onSearchTextChange = ({ target }) => {
    this.setState({ searchText: target.value });
  }

  onBookmarkedChange = ({ target }) => {
    this.setState({ bookmarkedOnly: target.checked });
  }

  onSelectedGenreChange = ({ target }) => {
    this.setState({ selectedGenre: target.value });
  }

  onSearch = (searchText, bookmarkedOnly, selectedGenre, movies) => {
    let searchedMovies = movies;
    if (searchText !== '') {
      searchedMovies = searchedMovies.filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    }
    if (bookmarkedOnly) {
      searchedMovies = searchedMovies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre !== '') {
      searchedMovies = searchedMovies.filter((movie) => movie.genre === selectedGenre);
    }
    console.log(searchedMovies);
    return searchedMovies;
  };

  render() {
    const {
      movies,
      searchText,
      bookmarkedOnly,
      selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList
          movies={ this.onSearch(searchText, bookmarkedOnly, selectedGenre, movies) }
        />
        <AddMovie onClick={ this.handleOnClick } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
