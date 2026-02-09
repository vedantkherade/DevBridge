import React from "react";
import "./Slide.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Add this CSS import

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: slidesToShow || 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="slide">
      <div className="container">
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={false}
          slidesToSlide={arrowsScroll || 1}
          draggable={true}
          swipeable={true}
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;
