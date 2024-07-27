import React, { useRef } from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, highlight, sneaker, story, footerAPI, Electronics } from './data/data.js';


const App = () => {
  return (
   <>
      <Cart/>
      <main>
        <Sales endpoint={Electronics} />
        <FlexContent endpoint={sneaker} />
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;