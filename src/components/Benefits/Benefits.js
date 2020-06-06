import React from 'react';
import './Benefits.css';
import Container from './../Container/Container';
import Benefit from './../Benefit/Benefit';
import bike from './../../images/bike.png';
import cardAdd from './../../images/cardAdd.png';
import diamond from './../../images/diamond.png';
import compas from './../../images/compas.png';


export default function Benefits() {
  return (
    <section className="Benefits">
      <Container>
        <section className="inner-Benefits">
          <Benefit
          image={bike}
          title="FREE SHIPPING"
          description="While not exectly line"
          />
          <Benefit
          image={cardAdd}
          title="SAVE 50% UP"
          description="While not exectly line"
          />
          <Benefit
          image={diamond}
          title="ONLINE PAY"
          description="While not exectly line"
          />
          <Benefit
          image={compas}
          title="TRACK ORDER"
          description="While not exectly line"
          />
        </section>
      </Container>
    </section>
  );
};
