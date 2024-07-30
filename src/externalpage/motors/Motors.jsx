import React from 'react';
import ReactDOM from 'react-dom/client';
import { Sales } from '../../components/main/OurProducts';
import Cart from '../../components/cart/Cart.jsx';
import { Footer } from '../../components/foot/Footer';
import '../../index.css';
import { Provider } from "react-redux";
import Store from '../../app/Store';
import { Toaster } from 'react-hot-toast';
import { footerAPI, motors } from '../../data/data';

const App = () => {
  return (
    <>
      <Cart />
      <main>
        <Sales endpoint={motors} />
      </main>
      <br /><br />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
