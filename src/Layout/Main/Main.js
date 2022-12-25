import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Component/Home/Footer/Footer';
import Home from '../../Component/Home/Home/Home';
import Navber from '../../Component/Home/Navber/Navber';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;