import React, { useState } from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI, topratesales2 } from './data/data.js';
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
        <Sales endpoint={toprateslaes} onProductClick={handleProductClick} />
        <FlexContent endpoint={sneaker} onProductClick={handleProductClick} />
        <Stories story={story} onProductClick={handleProductClick} />
      </main>
      <Footer footerAPI={footerAPI} />
      {selectedProductId && (
        <Modal productId={selectedProductId} onClose={handleCloseModal} />
      )}
   </>
  );
};

export default App;
