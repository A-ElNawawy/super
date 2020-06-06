import React from 'react';
import './HotDeals.css';
import Container from './../Container/Container';
import Header from './../Header/Header';
import Card from './../Card/Card';
import pampers from './../../images/products/pampers.png';
import ariel from './../../images/products/ariel.png';
import blackPhone from './../../images/products/blackPhone.png';
import grayPhone from './../../images/products/grayPhone.png';

export default function HotDeals() {
  return (
    <section className="HotDeals">
      <Container>
        <section className="inner-HotDeals">
          <Header
            title="Hot Deals"
            description="New Hot Deals Now"
            tabs={["All", "super Market", "BabyWorld", "TV", "Smart Phones"]}
          />

          <section className="cards">
            <Card
              sale
              className="pampers"
              productImage={pampers}
              productName="Pampers"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              sale
              className="ariel"
              productImage={ariel}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              sale
              className="blackPhone"
              productImage={blackPhone}
              productName="BlackPhone"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              sale
              className="grayPhone"
              productImage={grayPhone}
              productName="GrayPhone"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
          </section>
        </section>
      </Container>
    </section>
  );
};
