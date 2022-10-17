import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { Box, Image } from "@chakra-ui/react";
import { pizzaProducts } from './../../../assets/Data/Products';

const Pizza = () => {
  return (
    <Container>
      <Col className="our-menu-wrapper">
        <Box className="our-menu-top">
          <h3> PIZZA MENU</h3>
        </Box>

        <Row className="our-foods-menu">
          {pizzaProducts.map((pizza) => (
            <Box className="our-foods-single-menu" key={pizza.id}>
              <Image src={pizza.imgUrl} alt="fast-food" />

              <Box className="our-foods-menu-content">
                <h4>
                  {pizza.title} <span>{pizza.price}$</span>
                </h4>
                <p>{pizza.desc}</p>
                <Box className="add-card-button">
                  <span>
                    <FaHeart />
                  </span>
                  <span>
                    <FaCartPlus />
                  </span>
                </Box>
              </Box>
            </Box>
          ))}
        </Row>
      </Col>
    </Container>
  );
};

export default Pizza;
