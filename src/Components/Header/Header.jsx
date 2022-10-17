import React from "react";
import { Container } from "reactstrap";
import Slider from "react-slick";
import { useNavigate } from "react-router";
import "./Header.css";
import sliderData from "../../assets/Data/Slider";
import { Box } from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();

  const viewMore = () => {
    navigate("/menu");
  };

  const slider = {
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <header>
      <Container className="header-container">
        <Slider {...slider}>
          {sliderData.map((item) => (
            <Box key={item.id}>
              <div className="header-wrapper">
                <div className="header-content ">
                  <h2 className="header-food-title ">{item.title}</h2>
                  <p className="header-food-explanation">{item.desc}</p>
                  <button className="view-more-btn" onClick={viewMore}>
                    View More
                  </button>
                </div>
                <div className="header-img">
                  <img className="header-main-img" src={item.imgUrl} alt="" />
                </div>
              </div>
            </Box>
          ))}
        </Slider>
      </Container>
    </header>
  );
};
export default Header;
