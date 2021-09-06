import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import portfolio1 from '../../asset/images/image08.jpg';
import portfolio2 from '../../asset/images/image09.jpg';
import portfolio3 from '../../asset/images/image10.jpg';

const Portfolio = () => {
    return (
        <Container className="py-5">
            <h2 className="text-center display-6 fw-bold text-primary pb-4">Our Portfolio</h2>
            <Row>
                <Col md={10} className="offset-md-1 text-center">
                    <button className="button btn-primary rounded-pill m-2 px-3">All</button>
                    <button className="button btn-primary rounded-pill m-2 px-3">Web Design</button>
                    <button className="button btn-primary rounded-pill m-2 px-3">Web Development</button>
                    <button className="button btn-primary rounded-pill m-2 px-3">Web Branding</button>
                    <button className="button btn-primary rounded-pill m-2 px-3">Mobile Apps</button>
                    <button className="button btn-primary rounded-pill m-2 px-3">SEO</button>
                </Col>
            </Row>
            <Row className="pt-4">
                <Col md={4}>
                    <Image height={500} src={portfolio1} alt="portfolio" />
                </Col>
                <Col md={4}>
                    <Image src={portfolio2} alt="portfolio" />
                </Col>
                <Col md={4}>
                    <Image src={portfolio3} alt="portfolio" />
                </Col>
            </Row>
        </Container>
    );
};

export default Portfolio;