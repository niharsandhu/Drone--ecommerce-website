import React, { useRef } from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI, topratesales2 } from './data/data.js';



const App = () => {
  return (
   <>

      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App;