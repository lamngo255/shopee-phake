import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { path } from '@/constants/path';
import { useAuthenticated } from '@/hooks/useAuthenticated';
import PropTypes from 'prop-types';

export default function UnauthenticatedGuard({ children }) {
  const authenticated = useAuthenticated();

  if (authenticated) {
    return <Redirect to={path.home} />;
  }
  return <Fragment>{children}</Fragment>;
}

UnauthenticatedGuard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};
