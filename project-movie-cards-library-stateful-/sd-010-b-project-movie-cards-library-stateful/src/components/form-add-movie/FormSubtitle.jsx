import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="subtitle-input"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

FormSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormSubtitle;
