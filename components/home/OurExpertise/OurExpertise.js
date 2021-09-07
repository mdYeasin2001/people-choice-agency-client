import React, { Component } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import John from '../../../assets/images/John Doe.jpg';
import Emily from '../../../assets/images/Emily Smith.jpg';
import Blake from '../../../assets/images/Blake Run.jpg';
import Jenna from '../../../assets/images/Jenna Smith.jpg';

const OurExpertise = () => {
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <h2>Auto Play</h2>
        <Slider className='slide_show m-5 p-3' {...settings}>
          <div>
            <Image height={300} src={John}/>
          </div>
          <div>
            <Image height={300} src={Emily}/>
          </div>
          <div>
            <Image height={300} src={Blake}/>
          </div>
          <div>
            <Image height={300} src={Jenna}/>
          </div>
           <div>
            <Image height={300} src={John}/>
          </div>
          <div>
            <Image height={300} src={Emily}/>
          </div>
          <div>
            <Image height={300} src={Blake}/>
          </div>
          <div>
            <Image height={300} src={Jenna}/>
          </div>
           <div>
            <Image height={300} src={John}/>
          </div>
          <div>
            <Image height={300} src={Emily}/>
          </div>
          <div>
            <Image height={300} src={Blake}/>
          </div>
          <div>
            <Image height={300} src={Jenna}/>
          </div>
        </Slider>
      </div>
    );
  }

export default OurExpertise;