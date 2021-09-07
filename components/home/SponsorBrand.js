import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';
import brand6 from '../../assets/images/brand6.png';
import brand7 from '../../assets/images/brand7.png';
import brand8 from '../../assets/images/brand8.png';
import brand9 from '../../assets/images/brand9.png';
import brand10 from '../../assets/images/brand10.png';
import brand11 from '../../assets/images/brand11.png';
import brand12 from '../../assets/images/brand12.png';


const SponsorBrand = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <div className="pt-5 pb-4 px-md-5 bg-info my-5">
            <Slider className="slide_show py-4" {...settings}>
                <div>
                    <Image src={brand1} alt="brand" />
                </div>
                <div>
                    <Image src={brand2} alt="brand" />
                </div>
                <div>
                    <Image src={brand3} alt="brand" />
                </div>
                <div>
                    <Image src={brand4} alt="brand" />
                </div>
                <div>
                    <Image src={brand5} alt="brand" />
                </div>
                <div>
                    <Image src={brand6} alt="brand" />
                </div>
                <div>
                    <Image src={brand7} alt="brand" />
                </div>
                <div>
                    <Image src={brand8} alt="brand" />
                </div>
                <div>
                    <Image src={brand9} alt="brand" />
                </div>
                <div>
                    <Image src={brand10} alt="brand" />
                </div>
                <div>
                    <Image src={brand11} alt="brand" />
                </div>
                <div>
                    <Image src={brand12} alt="brand" />
                </div>
                <div>
                    <Image src={brand4} alt="brand" />
                </div>
                <div>
                    <Image src={brand5} alt="brand" />
                </div>
                <div>
                    <Image src={brand6} alt="brand" />
                </div>
                <div>
                    <Image src={brand7} alt="brand" />
                </div>
                <div>
                    <Image src={brand8} alt="brand" />
                </div>
                <div>
                    <Image src={brand9} alt="brand" />
                </div>
            </Slider>
        </div>
    );
};

export default SponsorBrand;