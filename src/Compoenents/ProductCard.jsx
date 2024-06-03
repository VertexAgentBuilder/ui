import React from "react";

export const ProductCard = ({ title, img, offer }) => {
  return (
    <div id="prodcut-card">
      <div className="product-img-container">
        <img src={img} alt={title} className="image" />
      </div>
      <div className="product-information">
        <div className="product-title">
          <h3>{title}</h3>
        </div>
        <div className="product-offer">
          <p>{offer}</p>
        </div>
      </div>
    </div>
  );
};
