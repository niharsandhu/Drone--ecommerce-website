import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './Product'; // Ensure the import is correct
import Title from './Title';
import Modal from './Modal';
import axios from 'axios';

const Psales = React.forwardRef(({ ifExists, endpoint: { title }, onProductClick }, ref) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemData, setItemData] = useState([]);

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

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get("http://68.183.81.196/api/product", {
          auth: {
            username: import.meta.env.VITE_USERNAME,
            password: import.meta.env.VITE_PASSWORD,
          }
        });

        console.log(result.data);
        setItemData(result.data.data.data); // This is the array of products
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='nike-container' ref={ref}>
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-4 ${ifExists ? 'grid-cols-4 xl:grid-cols-4 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'}`}>
        {itemData?.map((item, i) => (
          <Product
            key={item.id}
            title={item.name} // name of the product
            price={item.price}
            text={item.description}
            img={item.images[0]?.full_image_url} // Use the first image from the array
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

Psales.propTypes = {
  ifExists: PropTypes.bool,
  endpoint: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  onProductClick: PropTypes.func,
};

Psales.defaultProps = {
  ifExists: true,
  onProductClick: () => { },
};

export default Psales;
