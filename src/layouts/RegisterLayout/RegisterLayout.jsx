import React from 'react';
import HeaderRegister from 'src/components/HeaderRegister/HeaderRegister';
import Footer from 'src/components/Footer/Footer';

export default function RegisterLayout({ children, title }) {
  return (
    <div>
      <HeaderRegister title={title} />
      {children}
      <Footer />
    </div>
  );
}
