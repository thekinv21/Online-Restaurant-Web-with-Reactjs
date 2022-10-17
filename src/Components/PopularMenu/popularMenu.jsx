import React from "react";
import { Container, Col } from "reactstrap";
import popularMenu from "../../assets/Data/Products";
import "./popularMenu.css";

const PopularMenu = () => {
  return (
    <section>
      <Container className="popular-menu-wrapper">
        <Col className="popular-menu-top">
          <h3>POPULAR FOODS MENU </h3>
        </Col>
        <Col className="popular-menu">
          {popularMenu.map((food) => (
            <Col lg="3" key={food.id} className="popular-single-menu">
              <img src={food.imgUrl} alt="" />

              <div className="popular-menu-content">
                <h4>
                  {food.title} <span>{food.price}$</span>
                </h4>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur necessitatibus tempore non dolorum fugiat quae sint
                  assumenda reprehenderit aliquid, asperiores, possimus
                </p>
              </div>
            </Col>
          ))}
        </Col>
      </Container>
    </section>
  );
};
export default PopularMenu;
