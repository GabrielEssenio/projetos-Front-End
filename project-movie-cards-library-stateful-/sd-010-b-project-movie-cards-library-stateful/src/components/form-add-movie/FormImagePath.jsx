import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormImagePath extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="image-input"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormImagePath;
