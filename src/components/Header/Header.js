import React from 'react';
import './Header.css';
import Tab from './../Tab/Tab';

export default function Header({
  title, // string
  description, // string
  tabs, // Array of strings 
  centered
}) {
  return (
    <header className={`Header${centered ? " centered" : ""}`}>
      <section className={`left${centered ? " centered" : ""}`}>
        <h2 className="title">{title}</h2>
        <h3 className="description">{description}</h3>
      </section>
      {
        tabs ?
          <section className="right">
            <Tab>{tabs[0]}</Tab>
            <Tab className="active">{tabs[1]}</Tab>
            <Tab>{tabs[2]}</Tab>
            <Tab>{tabs[3]}</Tab>
            <Tab>{tabs[4]}</Tab>
          </section>
        :
          null
      }
    </header>
  );
};
