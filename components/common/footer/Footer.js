import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import footerImage from "../../../assets/images/image01.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { MdCall, MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <div className="agency-footer">
        <Container>
          <Row>
            <Col md={3}>
              <Image src={footerImage} alt="Footer Image" />
              <h6 className='mt-4 mb-4'>
                Maecenas pellentesque placerat quam, in finibus nisl tincidunt
                sed. Aliquam magna augue, malesuada ut feugiat eget, cursus eget
                felis.
              </h6>
              <div className="footer-social-Icon-container">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <AiOutlineInstagram />
                </span>
                <span>
                  <AiOutlineTwitter />
                </span>
              </div>
            </Col>
            <Col md={2}>
              <h4 className="agency-footer-header">Our links</h4>
              <ul>
                <li> &#62; Home</li>
                <li> &#62; About</li>
                <li> &#62; Service</li>
                <li> &#62; Team</li>
                <li> &#62; blog</li>
              </ul>
            </Col>
            <Col md={2}>
              <h4 className="agency-footer-header">Our Services</h4>
              <ul>
                <li> &#62; Strategy & Research</li>
                <li> &#62; Web Development</li>
                <li> &#62; Web Solution</li>
                <li> &#62; Digital Marketing</li>
                <li> &#62; App Design</li>
              </ul>
            </Col>
            <Col md={2}>
              <h4 className="agency-footer-header">Other link</h4>
              <ul>
                <li> &#62; FAQ</li>
                <li> &#62; Portfolio</li>
                <li> &#62; Privacy Policy</li>
                <li> &#62; Support</li>
                <li> &#62; Terms & Conditions</li>
                <li> &#62; Support</li>
              </ul>
            </Col>
            <Col md={3}>
              <h4 className="agency-footer-header">Contact Us</h4>
              <ul>
                <li>
                  <div className="d-flex">
                    <span className="footer-contact-icon">
                      <MdCall />
                    </span>
                    <span>
                      +91 123-456-7890 <br /> +91 987-654-3210
                    </span>
                  </div>
                </li>
                <li>
                  <div className='d-flex'>
                    <span className="footer-contact-icon">
                      <HiOutlineMail />
                    </span>
                    <span>
                      info@example.com <br /> info@example.com
                    </span>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <span className="footer-contact-icon p-3">
                      <MdLocationOn />
                    </span>
                    <span>Marmora Road Chi Minh City, Vietnam</span>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="credit text-center fw-bold bg-primary text-white py-1">
        <p>Copyright © 2021 DexignZone. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
