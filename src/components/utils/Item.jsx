import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import Modal from "../utils/Modal";

const Item = ({
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
  specifications,
  features,
  additionalImages,
  reviews,
  onClick,
}) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(setAddItemToCart(item));
  };

  const onAddToCartAndToggle = () => {
    onAddToCart();
    dispatch(setOpenCart({ cartState: true }));
  };

  const handleItemClick = () => {
    if (onClick) onClick(id); // Call the passed onClick function with the item id
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-[200px] h-[200px] hover:scale-105 cursor-pointer`}
        onClick={handleItemClick}
      >
        <div className="flex flex-col items-center justify-between h-full w-full">
          <h1 className="text-slate-200 text-xs font-medium filter drop-shadow absolute top-3">{title}</h1>
          <p className="text-slate-200 filter drop-shadow text-[10px] font-normal mb-0 absolute top-7">{text}</p>

          <div className="flex items-center justify-between w-[75px] absolute top-12">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-[10px] font-medium">₹{price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-3 h-3 md:w-4 md:h-4" />
              <h1 className="text-[10px] font-normal text-slate-100">{rating}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 absolute top-16 mt-1.5">
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={onAddToCart}
            >
              <ShoppingBagIcon className="icon-style text-slate-900 w-3 h-3" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme w-14 h-4 px-1 py-0 shadow shadow-sky-200 text-[10px] text-black"
              onClick={onAddToCartAndToggle}
            >
              {btn}
            </button>
          </div>
        </div>

        <div className="absolute bottom-0">
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className="w-[120px] h-[120px] object-contain"
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal item={{ id, title, text, img, color, shadow, price, rating, specifications, features, additionalImages, reviews }} onClose={closeModal} />
      )}
    </div>
  );
};

export default Item;








