import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormRating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating-input"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRating;
