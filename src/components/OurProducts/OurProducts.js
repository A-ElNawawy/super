import React from 'react';
import './OurProducts.css';
import Container from './../Container/Container';
import Header from './../Header/Header';
import Card from './../Card/Card';
import nutella from './../../images/products/nutella.png';
import Buxton from './../../images/products/Buxton.png';
import Valpre from './../../images/products/Valpre.png';
import evian from './../../images/products/evian.png';
import Biore from './../../images/products/Biore.png';
import Montain from './../../images/products/Montain.png';
import Laneige from './../../images/products/Laneige.png';
import Wave from './../../images/products/Wave.png';

export default function OurProducts() {
  return (
    <section className="OurProducts">
      <Container>
        <section className="inner-OurProducts">
          <Header
            title="Our Products"
            description="Browse our fascinating sections!"
            tabs={["All", "super Market", "BabyWorld", "TV", "Smart Phones"]}
          />

          <section className="cards">
            <Card
              productImage={nutella}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={Buxton}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={Valpre}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={evian}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={Biore}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={Montain}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={Laneige}
              productName="Ariel"
              newPrice="150$"
              oldPrice="190$"
              productDescription="Pampers Premium Care New"
              lastUpdate="2018/00/00"
            />
            <Card
              productImage={Wave}
              productName="Ariel"
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
