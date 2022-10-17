import React from "react";
import "./ChooiceUs.css";
import { Container, Col, Badge } from "reactstrap";
import { FaShippingFast, FaDollarSign, FaHeadphones } from "react-icons/fa";
import { Box, Image } from "@chakra-ui/react";

const ChooiceUs = () => {
  return (
    <Container className="chooice-us-container">
      <Box className="popular-menu-top">
        <h3 className="chooice-us-top">Why You Must Chooice Us?</h3>
      </Box>

      <Box className="chooice-us-row">
        <Col className="chooice-us-food-image">
          <Image src="./image/offer.png" alt="makarna" />
        </Col>

        <Col className="chooice-us-content">
          <h3>Best foods in the Country</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime
            quidem officia omnis quo, tempora sed vero sapiente harum at
            mollitia odio quibusdam iste recusandae eligendi quos quia
            consequuntur quaerat.
          </p>

          <Box className="chooice-us-icons-container">
            <Badge className="chooice-us-icons">
              <FaShippingFast className="icons" />
              <span>Let's Bring</span>
            </Badge>
            <Badge className="chooice-us-icons">
              <FaDollarSign className="icons" />
              <span>Easy Payment</span>
            </Badge>
            <Badge className="chooice-us-icons">
              <FaHeadphones className="icons" />
              <span>24/7 Service</span>
            </Badge>
          </Box>
        </Col>
      </Box>
    </Container>
  );
};

export default ChooiceUs;
