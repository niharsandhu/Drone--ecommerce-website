import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

// Styles for the modal
const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 500,
  },
  modal: {
    backgroundColor: "white",
    borderRadius: "0.5rem",
    padding: "1.5rem",
    maxHeight: "80vh",
    width: "75%",
    maxWidth: "700px",
    position: "relative",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    color: "#4b5563",
    cursor: "pointer",
    fontSize: "1.25rem",
    lineHeight: 1,
  },
  image: {
    width: "25%",
    height: "auto",
    objectFit: "contain",
    marginBottom: "1rem",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  header: {
    marginBottom: "1rem",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  sectionContent: {
    marginBottom: "1rem",
    fontSize: '11px'
  },
  box: {
    display: "flex",
  }
};

// ProductDescription component to display detailed product information
const Modal = ({
  item, 
  onClose,
  title,
  price,
  text,
  img,
  specifications,
  features,
  includes,
  onClick
}) => {
  if (!item) return null;

  // Format specifications for display
  const formatSpecifications = (text) => {
    return text ? text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    )) : null;
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button style={modalStyles.closeButton} onClick={onClose}>
          ×
        </button>
        <img
          src={image || (item.images?.[0]?.full_image_url || 'placeholder.jpg')}
          alt={`img/item-img/${item.id}`}
          style={modalStyles.image}
        />
        <div style={modalStyles.description}>
          <div>
            <h1 className="text-[15px] font-bold mb-0">{title}</h1>
            <p className="text-gray-700 text-[13px] mb-0">{text}</p>
          </div>
          <div style={modalStyles.box}>
            <div className="flex">
              <span className="font-semibold text-[14px]">₹{price}</span>
            </div>
            <div className="flex items-center ml-2">
              <StarIcon className="w-5 h-5 text-yellow-500" />
              <span className="ml-1 text-sm">1% Off</span>
            </div>
          </div>
          <div>
            <h2 style={modalStyles.sectionTitle}>Specifications</h2>
            <div style={modalStyles.sectionContent}>
              {specifications || 'No specifications available'}
            </div>
          </div>
          <div>
            <h2 style={modalStyles.sectionTitle}>Features</h2>
            <ul style={modalStyles.sectionContent}>
              {features?.length > 0 
                ? features.map((feature, index) => (
                    <li key={index}>{feature.feature}</li>
                  ))
                : 'No features available'}
            </ul>
          </div>
          <div>
            <h2 style={modalStyles.sectionTitle}>Additional Images</h2>
            <div style={modalStyles.sectionContent}>
              {img.length > 0 ? (
                item.images.map((image, index) => (
                  <img key={index} src={image.full_image_url} alt={`img/item-img/${item.id}-${index}`} className="w-[300px] h-auto object-contain mb-2" />
                ))
              ) : (
                <p>No additional images available</p>
              )}
            </div>
          </div>
          <div>
            <h2 style={modalStyles.sectionTitle}>Included Items</h2>
            <ul style={modalStyles.sectionContent}>
              {includes?.length > 0
                ? includes.map((included, index) => (
                    <li key={index}>{included.included_item}</li>
                  ))
                : 'No items included'}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
