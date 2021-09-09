import React from "react";
import Expert from "./Expert";
import Slider from "react-slick";
import ExpertiseData from './ExpertiseData';
import SectionTitleUnderline from "../../common/SectionTitleUnderline";

const OurExpertise = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 4000,
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
      <div className="py-5">
        <div className="text-center">
           <h1 className='display-6 fw-bold text-primary'>Our Expertise</h1>
           <SectionTitleUnderline/>
        </div>
        <Slider className='slide_show mx-5 mb-5' {...settings}>
            {
            ExpertiseData.map((expert) => <Expert key={expert.id} expert={expert}></Expert> )
            }
        </Slider>
      </div>
    );
  }

export default OurExpertise;