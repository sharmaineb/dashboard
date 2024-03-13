import React from 'react';
import { Helmet } from 'react-helmet';

const Header = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="bg-gradient-to-r from-cyan-200 to-pink-300 mb-3 px-4 py-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-black font-bebas-neue">Hello, Shar!</h1>
        </div>
      </div>
    </>
  );
};

export default Header;
