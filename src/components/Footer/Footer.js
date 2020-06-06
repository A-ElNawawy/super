import React from 'react';
import './Footer.css';
import Container from './../Container/Container';
import carrefour from './../../images/carrefour.png'
import location from './../../images/location_add.png'
import message from './../../images/message_add.png'
import Button from './../Button/Button';

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <nav>
          <section className="categories">
            <header className="img">
              <img src={carrefour} alt="" />
            </header>
            <div className="grid">
              <a href>Smart Phone</a>
              <a href>Girls</a>
              <a href>Baby World</a>
              <a href>SuperMarket</a>
              <a href>Health Care</a>
              <a href>Clothes</a>
              <a href>Babys</a>
              <a href>Baby World</a>
              <a href>Food</a>
            </div>
          </section>
          <section className="find">
            <div className="location">
              <img src={location} alt="" />
              <p><span>Find a</span> carrefour store</p>
            </div>
            <Button className="white blue-background">Find Store</Button>
          </section>
          <section className="subscribe">
            <div className="mail">
              <img src={message} alt="" />
              <p><span>Subscribe to</span> carrefour</p>
            </div>
          </section>
        </nav>
        <footer className="copyrights"></footer>
      </Container>
    </footer>
  );
};