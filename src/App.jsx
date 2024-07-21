import React, { useState } from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI, topratesales2 } from './data/data.js';
import Modal from"/Users/niharsandhu/Desktop/DRONE WEBSITE/src/components/utils/Modal"; 


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
      <Navbar />
      <Cart />
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists onProductClick={handleProductClick} />
        <FlexContent endpoint={highlight} ifExists onProductClick={handleProductClick} />
        <Sales endpoint={toprateslaes} onProductClick={handleProductClick} />
        <FlexContent endpoint={sneaker} onProductClick={handleProductClick} />
        <Sales endpoint={topratesales2} onProductClick={handleProductClick} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
      {selectedProductId && (
        <Modal
          itemId={selectedProductId}
          onClose={handleCloseModal}
        />
      )}
   </>
  )
}

export default App;