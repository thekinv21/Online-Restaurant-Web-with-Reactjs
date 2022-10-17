import React from "react";
import Navbar from "../../common/navbar/navbar";
import Desert from "./FoodsMenu/Desert";
import Pizza from "./FoodsMenu/Pizza";
import Salad from "./FoodsMenu/Salad";
import Slider from "react-slick";
import "./Menu.css";
import { Container, Col } from "reactstrap";

import Footer from "./../../common/footer/footer";

const Menu = () => {
  const slider = {
    infinite: false,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <Container>
      <Navbar />
      <Col className="header-container">
        <Slider {...slider}>
          <Pizza />
          <Salad />
          <Desert />
        </Slider>
      </Col>
      <Footer />
    </Container>
  );
};

export default Menu;
