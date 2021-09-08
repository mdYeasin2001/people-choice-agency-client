import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NewsLetterSubscribe = () => {
  return (
    <section className="bg-primary">
      <Row>
        <Col md={6} sm={12} xs={12} className="centerItem text-white">
          <h1>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos, molestiae?
          </h1>
        </Col>
        <Col md={6} sm={12} xs={12} className="centerItem text-white">
          <button>subscribe now</button>
        </Col>
      </Row>
    </section>
  );
};

export default NewsLetterSubscribe;
