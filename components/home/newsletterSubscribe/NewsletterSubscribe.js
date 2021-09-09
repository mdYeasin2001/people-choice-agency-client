import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const NewsLetterSubscribe = () => {
  return (
    <section className="Newsletter__subscribe__container py-5">
      <Container>
        <Row className="d-flex align-items-center g-3">
          <Col md={7} className="text-white">
            <h1 className="display-6 fw-bold fs-2">
              Subscribe To Our Newsletter For Latest Update Of New Products
            </h1>
          </Col>
          <Col md={5} className="text-white">
            <Form className="subscribe_form">
              <Form.Group controlId="formBasicEmail">
                <Form.Control size="lg" className="subscribe_input" type="email" placeholder="Enter email" />
                <Button className="subscribe_button brand_button fw-bold" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetterSubscribe;
