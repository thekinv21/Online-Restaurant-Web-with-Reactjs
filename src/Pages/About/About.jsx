import React from "react";
import "./About.css";
import Navbar from "./../../common/navbar/navbar";
import { Container, Col } from "reactstrap";
import { Box, Image } from "@chakra-ui/react";
import Footer from "./../../common/footer/footer";
function About() {
  return (
    <section>
      <Navbar />

      <Container>
        <Box className="about-us-row">
          <Col className="about-us-content">
            <h3>OUR RESTAURANT HİSTORY</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime
              quidem officia omnis quo, tempora sed vero sapiente harum at
              mollitia odio quibusdam iste recusandae eligendi quos quia
              consequuntur quaerat.
            </p>
          </Col>
        </Box>
      </Container>

      <Container>
        <Box className="about-us-row">
          <Col className="about-us-image">
            <Image src="./image/product-01.png" alt="makarna" />
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              soluta consequuntur at fugiat asperiores facilis reiciendis
              distinctio quisquam, temporibus illum, labore numquam molestiae
              laboriosam qui esse, natus optio aspernatur nostrum?
            </small>
          </Col>
          <Col className="about-us-image">
            <Image src="./image/product-02.png" alt="makarna" />
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              soluta consequuntur at fugiat asperiores facilis reiciendis
              distinctio quisquam, temporibus illum, labore numquam molestiae
              laboriosam qui esse, natus optio aspernatur nostrum?
            </small>
          </Col>
          <Col className="about-us-image">
            <Image src="./image/product-03.png" alt="makarna" />
            <small>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              soluta consequuntur at fugiat asperiores facilis reiciendis
              distinctio quisquam, temporibus illum, labore numquam molestiae
              laboriosam qui esse, natus optio aspernatur nostrum?
            </small>
          </Col>
        </Box>
      </Container>
      <Footer />
    </section>
  );
}

export default About;
