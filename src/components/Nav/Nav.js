import React from 'react';
import './Nav.css';
import mastercard from './../../images/mastercard.png';
import maestro from './../../images/maestro.png';
import visa from './../../images/visa.png';
// import downAngle from './../../images/down-angle.png';
import location from './../../images/location.png';
import clockplus from './../../images/clockplus.png';
import phone from './../../images/phone.png';

import Container from './../Container/Container';
import Button from './../Button/Button';

export default function Nav() {
  return (
    <nav className="Nav">
      <Container>
        <nav className="inner-Nav">
          <section className="currency">
            <img className="card mastercard" src={mastercard} alt="Payment methods" />
            <img className="card maestro" src={maestro} alt="Payment methods" />
            <img className="card visa" src={visa} alt="Payment methods" />
            <Button className="white">
              <p className="EGP">EGP</p>
              {/* <img className="downAngle" src={downAngle} alt="" /> */}
              <i className="fa fa-angle-down downAngle"></i>
            </Button>
          </section>
          <section className="pages">
            <Button className="white"><img className="location" src={location} alt="" />Stores</Button>
            <Button className="white"><img className="clockplus" src={clockplus} alt="" />WorksTime</Button>
            <Button className="white"><img className="phone" src={phone} alt="" />Contact us</Button>
          </section>
        </nav>
      </Container>
    </nav>
  );
};