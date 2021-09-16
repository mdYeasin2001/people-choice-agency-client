import React from "react";
import { Col, Row, Container} from "react-bootstrap";
import Image from "next/image";
import teamImg from '../../assets/images/teamimg.jpg'
import Services from '../../components/home/services/services'

const ServiceDetails = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col md={4}>
            <button className="service_button">All Service</button>
            <button className="service_button">Web Design</button>
            <button className="service_button">Web Development</button>
            <button className="service_button">Web Branding</button>
            <button className="service_button">Mobile Apps</button>
            <button className="service_button">SEO</button>
            <button className="service_button">24X4 Support</button>
          </Col>
          <Col md={8}>
            <Image className="rounded" src={teamImg} alt="Team Picture"></Image>
            <h3 className="text-primary display-6">Web Development</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h4 className="text-primary display-6">
              How You Start Web Development?
            </h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
            <ul className="fw-bold">
              <li>Lorem Ipsum is simply dummy text of the printing.</li>
              <li>
                Lorem Ipsum has been the industry's standard dummy text ever.
              </li>
              <li>
                when an unknown printer took a galley of type and scrambled.
              </li>
              <li>
                It has survived not only five centuries, but also the leap.
              </li>
              <li>
                Recently with desktop publishing software like Aldus PageMaker.
              </li>
              <li>
                Lorem Ipsum is simply dummy text of the printing industry.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Services/>
    </main>
  );
};

export default ServiceDetails;
