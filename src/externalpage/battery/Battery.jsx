import React from 'react'; // Ensure correct casing
import ReactDOM from 'react-dom/client'
import { Sales } from '../../components/main/OurProducts';
import  Cart  from '../../components/cart/Cart.jsx';
import { Footer } from '../../components/foot/Footer';
import '../../index.css'
import { Provider } from "react-redux";
import Store from '../../app/Store';
import { Toaster } from 'react-hot-toast';
import { heroapi, popularsales, high, sneaker, footerAPI, battery } from '../../data/data';
import Modal from "../../components/main/Modal";


const App = () => {
  return (
   <>
      <Cart/>
      <main>
        <Sales endpoint={battery} />
      </main>
      <br></br><br></br>
      <Footer footerAPI={footerAPI} />
   </>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false} />
        <App/>
      </Provider>
    </React.StrictMode>
  )
