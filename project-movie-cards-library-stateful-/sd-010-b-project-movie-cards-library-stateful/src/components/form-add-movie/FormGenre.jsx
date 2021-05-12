import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormGenre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

FormGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormGenre;
