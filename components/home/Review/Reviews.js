import React from "react";
import ReviewPost from "./ReviewPost";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import ReviewData from './ReviewData';
import SectionTitleUnderline from "../../common/SectionTitleUnderline";

const Reviews = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      arrows: false,
      autoplaySpeed: 4000,
      cssEase: "linear",
      appendDots: dots => <ul>{dots}</ul>,
      customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
    };
    return (
      <Container className='mt-5'>
        <div className="text-center">
           <h1 className='display-6 fw-bold text-primary'>What Our Clients Say’s</h1>
           <SectionTitleUnderline/>
        </div>
        <Slider className='slide_show mx-5 mb-5 row' {...settings}>
            {
            ReviewData.map((review) => <ReviewPost key={review.id} review={review}></ReviewPost> )
            }
        </Slider>
      </Container>
    );
  }

export default Reviews;