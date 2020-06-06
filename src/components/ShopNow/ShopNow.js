import React from 'react';
import './ShopNow.css';
import Container from './../Container/Container';


export default function ShopNow() {
  return (
    <section className="ShopNow">
      <Container>
        <section className="inner-ShopNow">
          <section className="branches">
            <div className="branch sports">
                <h2>Sports Products</h2>
                <a href="#void">SHOP NOW</a>
            </div>
            <div className="branch food">
                <h2>Food Products</h2>
                <a href="#void">SHOP NOW</a>
            </div>
            <div className="branch smart">
                <h2>Smart Products</h2>
                <a href="#void">SHOP NOW</a>
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};
