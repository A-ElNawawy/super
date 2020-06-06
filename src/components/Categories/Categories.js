import React from 'react';
import './Categories.css';
import Button from './../Button/Button';
import Container from './../Container/Container';
import smartphone from './../../images/smartphone.png';
import bag from './../../images/bag.png';
import smilehappy from './../../images/smilehappy.png';
import star from './../../images/star.png';
import cherry from './../../images/cherry.png';
import moon from './../../images/moon.png';
import shirt from './../../images/shirt.png';
import pizza from './../../images/pizza.png';

export default function Categories() {
  return (
    <section className="Categories">
      <Container>
        <section className="inner-Categories">
          <Button className="gray"><img src={smartphone} alt="" />Smart Phone</Button>
          <Button className="gray"><img src={bag} alt="" />SuperMarket</Button>
          <Button className="gray"><img src={smilehappy} alt="" />Babys</Button>
          <Button className="gray"><img src={star} alt="" />Girls</Button>
          <Button className="gray"><img src={cherry} alt="" />Health Care</Button>
          <Button className="gray"><img src={moon} alt="" />Baby World</Button>
          <Button className="gray"><img src={shirt} alt="" />Clothes</Button>
          <Button className="gray"><img src={pizza} alt="" />Food</Button>
          <Button className="gray">
            <i style={{fontSize: "50px", color: "#0056a8"}} className="fa fa-ellipsis-h"></i>{/* Note: to be changed */}
          </Button>
        </section>
      </Container>
    </section>
  );
};
