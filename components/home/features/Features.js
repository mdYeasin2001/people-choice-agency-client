import Feature from "./Feature";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Col, Container, Row } from "react-bootstrap";
import featureImage from "../../../assets/images/image07.png";
import Image from 'next/image'
const featuresInfo1 = [
  {
    id: 1,
    icon: <HiOutlineLightBulb />,
    title: "Idea & Analysis",
    description:
      "Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.",
  },
  {
    id: 2,
    icon: <HiOutlineLightBulb />,
    title: "Designing",
    description:
      "Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.",
  },
  {
    id: 3,
    icon: <HiOutlineLightBulb />,
    title: "Development",
    description:
      "Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.",
  },
  {
    id: 4,
    icon: <HiOutlineLightBulb />,
    title: "Testing & Lunching",
    description:
      "Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.",
  },
];
const Features = () => {
  return (
    <Container>
      <h2 className="text-center display-6 fw-bold text-primary pb-4">
        Our Fetures
      </h2>
      <Row className="align-item-center">
        <Col md={4} >
          {featuresInfo1.map((feature) => (
            <Feature
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            ></Feature>
          ))}
        </Col>
        <Col md={4}>
          <Image className="img-fluid" src={featureImage} alt="Feature Image"/>
        </Col>
        <Col md={4}>
          {featuresInfo2.map((feature) => (
            <Feature
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            ></Feature>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
