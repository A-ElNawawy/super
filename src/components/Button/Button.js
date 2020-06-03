import React from 'react';
import './Button.css';

export default function Button({ children, className }) {
  return (
    <button className={`Button${className ? " " + className : ""}`}>{children}</button>
  );
};