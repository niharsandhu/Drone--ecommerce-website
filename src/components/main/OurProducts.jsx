import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import Title from './Title';
import Modal from './Modal';
import axios from 'axios';

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
  const [itemData, setItemData] = useState([]); // API's data

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

  // For fetching data from API
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://api.hobbyhai.com/api/product", {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD,
          }
        });

        setItemData(result.data.data.data); // This is the array of products
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='nike-container' ref={ref}>
      <Title title="Our Products" />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-4 ${ifExists ? 'grid-cols-4 xl:grid-cols-4 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'}`}>
        {itemData.map((item, i) => (
          <Product
            key={item.id} // index number for unique identification
            title={item.name} // name of the product
            price={item.price} // price of the item
            text={item.description} // description of the item
            img={item.images[0]?.full_image_url} // Use the first image from the array
            specifications={item.specifications.value}
            features={item.features} // working, a arr of dict
            includes={item.includes}
            onClick={(e) => openModal(item.id, e)}
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
  onProductClick: () => { },
};

export default Sales;