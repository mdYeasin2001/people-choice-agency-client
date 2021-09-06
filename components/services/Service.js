import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { IoIosArrowForward } from 'react-icons/io'

const Service = ({ title, description, icon }) => {
    return (
        <Col md={4}>
            <Card className="pb-3 border-0 rounded shadow">
                <div className="text-center fs-1"> {icon}</div>
                <Card.Body>
                    <Card.Title className="text-primary text-center fs-3">{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <div className="text-center fs-3">
                    <a className="rounded-circle bg-primary text-white p-1" href=""><IoIosArrowForward /></a>
                </div>
            </Card>
        </Col>
    );
};

export default Service;