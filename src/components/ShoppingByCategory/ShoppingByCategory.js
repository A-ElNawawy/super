import React from 'react';
import './ShoppingByCategory.css';
import Container from './../Container/Container';
import Header from './../Header/Header';
import ThumbCard from './../ThumbCard/ThumbCard';
import whitePhone from './../../images/products/whitePhone.png';
import baby from './../../images/products/baby.png';
import tv from './../../images/products/tv.png';
import samanco from './../../images/products/samanco.png';
import fruits from './../../images/products/fruits.png';
import water from './../../images/products/water.png';

export default function ShoppingByCategory() {
  return (
    <section className="ShoppingByCategory">
      <Container>
        <section className="inner-ShoppingByCategory">
          <Header
            title="SHOPPING BY CATEGORY"
            description="online shopping for every thing"
          />

          <section className="cards">
            <ThumbCard
              className="whitePhone"
              productImage={whitePhone}
              productName="Smart Phones"
            />
            <ThumbCard
              className="baby"
              productImage={baby}
              productName="Baby World"
            />
            <ThumbCard
              className="tv"
              productImage={tv}
              productName="Smart TV’S"
            />
            <ThumbCard
              className="samanco"
              productImage={samanco}
              productName="Super Market"
            />
            <ThumbCard
              className="fruits"
              productImage={fruits}
              productName="Healht Food"
            />
            <ThumbCard
              className="water"
              productImage={water}
              productName="Pepsi Water"
            />
          </section>
        </section>
      </Container>
    </section>
  );
};
