import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./contactForm";
import contact from "../../../assets/images/contact.png";
const ContactSection = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="gt-3">
          <Col md={6}>
          <Image src={contact} alt="contact-hero"/>
          </Col> 
          <Col md={6}>
            <ContactForm/>
          </Col> 
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
