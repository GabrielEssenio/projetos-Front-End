import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormStoryline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="storyline-input"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}
FormStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormStoryline;
