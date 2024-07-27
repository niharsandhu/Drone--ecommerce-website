import React, { useState } from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, highlight, sneaker, story, footerAPI,frames, Electronics } from './data/data.js';
import Modal from "./components/utils/Modal";

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
  };

  const handleCloseModal = () => {
    setSelectedProductId(null);
  };

  return (
   <>
      <Navbar/>
      <Cart />
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists onProductClick={handleProductClick} />
        <FlexContent endpoint={highlight} ifExists onProductClick={handleProductClick} />
        <Sales endpoint={Electronics} onProductClick={handleProductClick} />
        <FlexContent endpoint={sneaker} onProductClick={handleProductClick} />
        <Sales endpoint={frames} onProductClick={handleProductClick} /> 
        <br></br>
      </main>
      <Footer footerAPI={footerAPI} />
      {selectedProductId && (
        <Modal productId={selectedProductId} onClose={handleCloseModal} />
      )}
   </>
  );
};

export default App;
