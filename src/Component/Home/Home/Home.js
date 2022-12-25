import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ConnectUs from '../Connect/Connect';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <ConnectUs></ConnectUs>
    </div>
  );
};

export default Home;