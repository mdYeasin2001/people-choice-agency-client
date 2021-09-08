import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import portfolio1 from '../../assets/images/image08.jpg';
import portfolio2 from '../../assets/images/image09.jpg';
import portfolio3 from '../../assets/images/image10.jpg';
import SectionTitleUnderline from '../common/SectionTitleUnderline';

const Portfolio = () => {
    return (
        <Container className="py-5 Portfolio__container">
            <h2 className="text-center display-6 fw-bold text-primary">Our Portfolio</h2>
            <div className="d-flex justify-content-center pb-4">
                <SectionTitleUnderline />
            </div>
            <Row>
                <Col md={10} className="offset-md-1 text-center">
                    <button className="button btn-info rounded-pill portfolio_button">All</button>
                    <button className="button btn-info rounded-pill portfolio_button">Web Design</button>
                    <button className="button btn-info rounded-pill portfolio_button">Web Development</button>
                    <button className="button btn-info rounded-pill portfolio_button">Web Branding</button>
                    <button className="button btn-info rounded-pill portfolio_button">Mobile Apps</button>
                    <button className="button btn-info rounded-pill portfolio_button">SEO</button>
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