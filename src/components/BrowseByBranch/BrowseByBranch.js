import React from 'react';
import './BrowseByBranch.css';
import Container from './../Container/Container';
import Header from './../Header/Header';
import branch1 from './../../images/branches/branch1.png';
import branch2 from './../../images/branches/branch2.png';
import branch3 from './../../images/branches/branch3.png';
import branch4 from './../../images/branches/branch4.png';

export default function BrowseByBranch() {
  return (
    <section className="BrowseByBranch">
      <Container>
        <section className="inner-BrowseByBranch">
          <Header
            title="BROWSE BY BRANCH"
            description="Choose the branch closest to you"
            centered
          />
          <section className="branches">
            <div className="branch">
              <p>City Stars</p>
              <img src={branch1} alt="branch1" />
            </div>
            <div className="branch">
            <p>City Stars</p>
              <img src={branch2} alt="branch2" />
            </div>
            <div className="branch">
            <p>City Stars</p>
              <img src={branch3} alt="branch3" />
            </div>
            <div className="branch">
            <p>City Stars</p>
              <img src={branch4} alt="branch4" />
            </div>
          </section>
        </section>
      </Container>
    </section>
  );
};
