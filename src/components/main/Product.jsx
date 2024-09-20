import React from 'react';
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { useNavigate } from "react-router-dom";

const colorOptions = [
  { gradient: "from-orange-500 to-amber-500", shadow: "shadow-lg shadow-orange-500" },
  { gradient: "from-gray-900 to-yellow-500", shadow: "shadow-lg shadow-yellow-500" },
  { gradient: "from-blue-500 to-cyan-500", shadow: "shadow-lg shadow-cyan-500" },
  { gradient: "from-red-500 to-rose-500", shadow: "shadow-lg shadow-rose-500" },
  { gradient: "from-sky-600 to-indigo-600", shadow: "shadow-lg shadow-blue-500" },
  { gradient: "from-green-500 to-emerald-500", shadow: "shadow-lg shadow-green-500" },
  { gradient: "from-yellow-500 to-yellow-500", shadow: "shadow-lg shadow-yellow-500" },
  { gradient: "from-[#936550] to-orange-900", shadow: "shadow-lg shadow-orange-800" },
];

const getRandomColor = () => colorOptions[Math.floor(Math.random() * colorOptions.length)];

const Product = ({ id, title, text, rating, price, btn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { gradient, shadow } = getRandomColor();

  const onAddToCart = (e) => {
    e.stopPropagation();
    dispatch(setAddItemToCart({ id, title, text, price }));
  };

  const onAddToCartAndToggle = (e) => {
    e.stopPropagation();
    onAddToCart(e);
    dispatch(setOpenCart({ cartState: true }));
  };

  const handleItemClick = (e) => {
    e.stopPropagation();
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={`relative bg-gradient-to-b ${gradient} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-transform duration-300 ease-in-out cursor-pointer w-full h-80 max-w-xs`}
      onClick={handleItemClick}
    >
      <div className="flex flex-col items-center justify-items-start h-full w-full space-y-2">
        <h1 className="text-slate-200 text-xl font-medium filter drop-shadow-md mb-1">{title}</h1>
        <p className="text-slate-200 filter drop-shadow-md text-base font-normal mb-1">{text}</p>

        <div className="flex items-center justify-center w-full max-w-[18rem] mb-2 space-x-2">
          <div className="flex items-center bg-white/80 px-2 py-1 rounded blur-effect-theme">
            <h1 className="text-black text-base font-medium">₹{price}</h1>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <h1 className="text-base font-normal text-slate-100">{rating}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme p-2 shadow-md shadow-sky-200"
            onClick={onAddToCart}
          >
            <ShoppingBagIcon className="text-slate-900 w-4 h-4" />
          </button>
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme px-4 py-2 shadow-md shadow-sky-200 text-black rounded-xl"
            onClick={onAddToCartAndToggle}
          >
            Buy Now{btn}
          </button>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center w-full">
          <img
            src={`path_to_your_images/${id}.png`} // Replace with the correct image source
            alt={`img/item-img/${id}`}
            className="w-3/4 h-auto object-contain"
          />
      </div>
    </div>
  );
};

export default Product;






















