import React from 'react';
import Banner from './Banner';
// import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from '../Contact/Contact';
import Carousel from './Carousel';

const Home = () => {
  
  return (
    <div>
      <Carousel></Carousel>
      <Banner></Banner>
      <Services></Services>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
  );
};

export default Home; <h2>This is Home</h2>