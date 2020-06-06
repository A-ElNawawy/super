import React from 'react';
import './Tab.css';
import Button from './../Button/Button';

export default function Tab({children, className}) {
  return (
    <Button className={`Tab${className? " " + className : ""}`}>
      {children}
    </Button>
  );
};
