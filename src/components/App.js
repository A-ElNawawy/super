import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Controls from './Controls/Controls';
import Categories from './Categories/Categories';
import Cover from './Cover/Cover';
import HotDeals from './HotDeals/HotDeals';
import ShopNow from './ShopNow/ShopNow';
import ShoppingByCategory from './ShoppingByCategory/ShoppingByCategory';
import Benefits from './Benefits/Benefits';
import BrowseByBranch from './BrowseByBranch/BrowseByBranch';
import OurProducts from './OurProducts/OurProducts';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Controls />
        <Categories />
        <Cover />
      </header>
      <ShoppingByCategory />
      <Benefits />
      <BrowseByBranch />
      <HotDeals />
      <ShopNow />
      <OurProducts />
      <Footer />
    </div>
  );
};