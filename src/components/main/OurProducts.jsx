import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Title from './Title';
import Modal from './Modal';

// Function to shuffle an array
const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Function to get a specified number of random items from each category
const getRandomItemsFromCategories = (categories, numberOfItems) => {
  const randomItems = [];
  for (const category of categories) {
    const items = shuffleArray(category.items);
    randomItems.push(...items.slice(0, numberOfItems)); // Get the specified number of items
  }
  return shuffleArray(randomItems); // Shuffle the final list of items
};

export const Sales = React.forwardRef(({ ifExists, categories, numberOfItems, onProductClick }, ref) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    if (categories) {
      setRandomItems(getRandomItemsFromCategories(categories, numberOfItems));
    }
  }, [categories, numberOfItems]);

  const openModal = (id, e) => {
    if (e.target.closest('.cart-button') || e.target.closest('.buy-now-button')) {
      return;
    }
    setSelectedProductId(id);
    setIsModalOpen(true);
    if (onProductClick) {
      onProductClick(id);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  if (!ifExists) return null;

  return (
    <div className='nike-container' ref={ref}>
      <Title title="Our Products" />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-4 ${ifExists ? 'grid-cols-4 xl:grid-cols-4 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'}`}>
        {randomItems.map((product, i) => (
          <Product 
            {...product} 
            key={i} 
            onClick={(e) => openModal(product.id, e)} 
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          itemId={selectedProductId}
          onClose={closeModal}
        />
      )}
    </div>
  );
});

Sales.propTypes = {
  ifExists: PropTypes.bool,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.object).isRequired,
    })
  ).isRequired,
  numberOfItems: PropTypes.number, // Number of items to show from each category
  onProductClick: PropTypes.func,
};

Sales.defaultProps = {
  ifExists: true,
  numberOfItems: 1, // Default number of items to show from each category
  onProductClick: () => {},
};

export default Sales;











