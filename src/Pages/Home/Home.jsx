import React, { Fragment } from "react";
import "./Home.css";
import Navbar from './../../common/navbar/navbar';
import Footer from './../../common/footer/footer';
import Header from './../../Components/Header/Header';
import PopularMenu from './../../Components/PopularMenu/popularMenu';
import ChooiceUs from './../../Components/ChooiceUs/ChooiceUs';

import Testimonials from './../../Components/Testimonials/Testimonials';


const  Home = () => {
  return (
    <Fragment>
      <Navbar/>
      <Header />
      <PopularMenu />
      <ChooiceUs/>
      <Testimonials/>
      <Footer/>
    </Fragment>
  );
}

export default Home;
