import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-main">
          <Col>
            <h5 className="footer-link-title">Quicks</h5>
            <Box>
              <ListGroup className="footer-links">
                <ListGroupItem className="info-link">
                  <i className="fas fa-user"></i>
                  <a href="/#">Terms And Conditions</a>
                </ListGroupItem>

                <ListGroupItem className="info-link">
                  <i className="fas fa-shield-halved"></i>
                  <a href="/#">Privacy Policy</a>
                </ListGroupItem>

                <ListGroupItem className="info-link">
                  <i className="fas fa-headphones"></i>
                  <a href="/#">Contact Us</a>
                </ListGroupItem>

                <ListGroupItem className="info-link">
                  <i className="fas fa-credit-card"></i>
                  <a href="/#">Payment</a>
                </ListGroupItem>
              </ListGroup>
            </Box>
          </Col>

          <Col>
            <h5 className="footer-link-title">Informatıon</h5>
            <Box>
              <ListGroup className="footer-links">
                <ListGroupItem className="info-link">
                  <i className="fas fa-home"></i>
                  <a href="/home">Home</a>
                </ListGroupItem>

                <ListGroupItem className="info-link">
                  <i className="fas fa-burger"></i>
                  <a href="/menu">Menu</a>
                </ListGroupItem>

                <ListGroupItem className="info-link">
                  <i className="fas fa-phone"></i>
                  <a href="/reservation">Reservation</a>
                </ListGroupItem>

                <ListGroupItem className="info-link">
                  <i className="fas fa-user"></i>
                  <a href="/signin">Login</a>
                </ListGroupItem>
              </ListGroup>
            </Box>
          </Col>

          <Col>
            <h5 className="footer-link-title">Contact Us</h5>
            <Box>
              <ListGroup className="footer-links">
                <ListGroupItem className="contact-link">
                  <i className="fas fa-location-dot"></i>
                  Turkey , İstanbul
                </ListGroupItem>

                <ListGroupItem className="contact-link">
                  <i className="fas fa-envelope"></i>vadimkiniabaev@gmail.com
                </ListGroupItem>

                <ListGroupItem className="contact-link">
                  <i className="fas fa-phone"></i>
                  +2020332322
                </ListGroupItem>

                <ListGroupItem className="contact-link">
                  <i className="fas fa-school"></i>
                  Trakya University
                </ListGroupItem>
              </ListGroup>
            </Box>
          </Col>

          <Col>
            <h5 className="footer-link-title">Social Media</h5>
            <Box>
              <ListGroup className="footer-links social-media">
                <ListGroupItem className="social-media-items">
                  <FaFacebook />
                </ListGroupItem>

                <ListGroupItem className="social-media-items">
                  <FaGithub />
                </ListGroupItem>

                <ListGroupItem className="social-media-items">
                  <FaInstagram />
                </ListGroupItem>

                <ListGroupItem className="social-media-items">
                  <FaTwitter />
                </ListGroupItem>
              </ListGroup>
            </Box>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
