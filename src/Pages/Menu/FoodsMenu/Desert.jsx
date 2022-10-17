import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { Box, Image } from "@chakra-ui/react";
import { dessertProducts } from "./../../../assets/Data/Products";

const Desert = () => {
  return (
    <Container>
      <Col className="our-menu-wrapper">
        <Box className="our-menu-top">
          <h3> DESERT MENU</h3>
        </Box>

        <Row className="our-foods-menu">
          {dessertProducts.map((desert) => (
            <Box className="our-foods-single-menu" key={desert.id}>
              <Image src={desert.imgUrl} alt="desert" />

              <Box className="our-foods-menu-content">
                <h4>
                  {desert.title} <span>{desert.price}$</span>
                </h4>
                <p>{desert.desc}</p>
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

export default Desert;
