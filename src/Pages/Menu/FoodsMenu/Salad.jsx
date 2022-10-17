import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FaHeart, FaCartPlus } from "react-icons/fa";
import { Box, Image } from "@chakra-ui/react";
import { saladMenuProducts } from "./../../../assets/Data/Products";

const Salad = () => {
  return (
    <Container>
      <Col className="our-menu-wrapper">
        <Box className="our-menu-top">
          <h3> SALAD MENU</h3>
        </Box>

        <Row className="our-foods-menu">
          {saladMenuProducts.map((salad) => (
            <Box className="our-foods-single-menu" key={salad.id}>
              <Image src={salad.imgUrl} alt="salad" />

              <Box className="our-foods-menu-content">
                <h4>
                  {salad.title} <span>{salad.price}$</span>
                </h4>
                <p>{salad.desc}</p>
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

export default Salad;
