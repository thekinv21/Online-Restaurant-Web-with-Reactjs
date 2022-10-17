import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "reactstrap";
import Comments from "../../assets/Data/Comments";

const Testimonials = () => {
  return (
    <Container className="testimonials-container">
      <Col className="popular-menu-top">
        <h3>OUR CLIENST SAYS</h3>
      </Col>

      <Row className="testimonials-box-container">
        {Comments.map((comment) => (
          <div key={comment.id} className="testimonials-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-image">
                  <img src={comment.imgUrl} alt="" />
                </div>

                <div className="name-username">
                  <strong>{comment.firstName}</strong>
                  <small>{comment.email}</small>
                </div>
              </div>
              <div className="reviews">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>

            <div className="clienst-comments">
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
