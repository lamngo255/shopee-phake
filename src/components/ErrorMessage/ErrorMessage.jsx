import React from 'react';
import { Message } from './errorMessage.style';
import PropTypes from 'prop-types';

export default function ErrorMessage({ errors, name }) {
  const error = errors[name];

  return <Message>{error && error.message}</Message>;
}

ErrorMessage.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string,
};
