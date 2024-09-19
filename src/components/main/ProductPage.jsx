import React from 'react';
import { useParams } from 'react-router-dom';
import { StarIcon } from "@heroicons/react/24/solid";
import {  Electronics, popularsales,frames,battery,Propellers,motors,camera,radio,accessories } from '../../data/data'; // Import your accessories data

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL

  // Find the product based on the ID
  const product = popularsales.items.find((item) => item.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{product.title}</h1>
      <p style={{ fontSize: '16px', color: 'gray' }}>{product.text}</p>

      <img
        src={`path_to_your_images/${product.id}.png`} // Replace with the correct image source
        alt={`img/item-img/${product.id}`}
        style={{ width: '300px', height: 'auto', objectFit: 'contain', marginBottom: '1rem' }}
      />

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>₹{product.price}</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StarIcon className="w-5 h-5 text-yellow-500" />
          <span style={{ marginLeft: '4px', fontSize: '16px' }}>{product.rating}</span>
        </div>
      </div>
      
      {/* Additional sections like specifications, features, and reviews can be added here */}
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '1rem 0' }}>Specifications</h2>
      {/* Add any specifications if available */}
    </div>
  );
};

export default ProductPage;


