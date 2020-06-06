import React from 'react';
import './ThumbCard.css';

export default function ThumbCard({
  className,
  productImage,
  productName,
}) {
  return (
    <div className="ThumbCard">
      <div className={`img${className ? " " + className : null}`}>
        <img className={className ? className : null} src={productImage} alt={productName} />
      </div>
      <h3>{productName}</h3>
    </div>
  );
};