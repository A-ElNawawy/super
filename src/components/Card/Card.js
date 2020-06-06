import React from 'react';
import './Card.css';
import Button from './../Button/Button';
import Dropdown from './../Dropdown/Dropdown';

export default function Card({
  sale,
  className,
  productImage,
  productName,
  newPrice,
  oldPrice,
  productDescription,
  lastUpdate
}) {
  return (
    <div className="Card">
      <div className="product">
      {
        sale ?
          <h4 className="badge">Sale<span>&nbsp;50%</span></h4>
        :
        null
      }
        <img className={className ? className : null} src={productImage} alt={productName} />
      </div>
      <div className="prices">
        <h3>{newPrice}</h3>
        <h4>{oldPrice}</h4>
      </div>
      <p>{productDescription}</p>
      <div className="add">
        <Dropdown />                            {/* Note: to be adjusted */}
        <Button className="white red-background">Add</Button>
      </div>
      <p className="last">Last Update: {lastUpdate}</p>
    </div>
  );
};