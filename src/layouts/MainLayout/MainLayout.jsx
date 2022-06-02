import React from 'react';
import Header from '@/components/Header/Header';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};
