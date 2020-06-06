import React from 'react';
import './Benefit.css';


export default function Benefit({
  image,
  title,
  description
}) {
  return (
    <section className="Benefit">
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="right">
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </section>
  );
};