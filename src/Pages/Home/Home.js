import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Contact from '../Contact/Contact';
import Carousel from './Carousel';

const Home = () => {
  
  return (
    <div>
      <Carousel></Carousel>
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home; <h2>This is Home</h2>