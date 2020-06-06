import React from 'react';
import './Controls.css';
import Button from './../Button/Button';
import carrefour from './../../images/carrefour.png';
import magnifying from './../../images/magnifying.png';
import cart from './../../images/cart.png';
import profileAdd from './../../images/profile_add.png';
import Container from '../Container/Container';

export default function Controls() {
  return (
    <section className="Controls">
      <Container>
        <section className="inner-Controls">
          <img className="carrefour-logo" src={carrefour} alt="" />

          <div className="right">
            <div className="search-bar">
              <Button className="all-category">
                All Category
                <i className="fa fa-angle-down"></i>
              </Button>
              <input className="search" placeholder="Search" />
            </div>
            <Button className="magnifying">
              <img src={magnifying} alt="" />
            </Button>
            <Button className="cart">
              <img src={cart} alt="" />
            </Button>
            <Button className="login white">
              <img src={profileAdd} alt="" />
              Login
            </Button>
          </div>
        </section>
      </Container>
    </section>
  );
};