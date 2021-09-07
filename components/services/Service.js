import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io'

const Service = ({ title, description, icon }) => {
    return (
        <Col md={4} className="Service__container">
            <Card className="py-3 service_card border-0 rounded">
                <div className="d-flex justify-content-center">
                    <div className="text-center fs-1 icon_box text-primary"> {icon}</div>
                </div>
                <Card.Body>
                    <Card.Title className="text-primary text-center fs-3 mb-3">{title}</Card.Title>
                    <Card.Text className="text-secondary lead fs-6">{description}</Card.Text>
                </Card.Body>
                    <a className="service_button mx-auto" href=""><IoIosArrowForward /></a>
            </Card>
        </Col>
    );
};

export default Service;