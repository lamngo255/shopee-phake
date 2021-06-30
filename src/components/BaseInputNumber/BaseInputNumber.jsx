import React from 'react';
import PropTypes from 'prop-types';

export default function BaseInputNumber({ onChange, value, ...props }) {
  const handleChange = event => {
    const val = event.target.value;
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val);
    }
  };

  return <input type="text" onChange={handleChange} value={value} {...props} />;
}

BaseInputNumber.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
