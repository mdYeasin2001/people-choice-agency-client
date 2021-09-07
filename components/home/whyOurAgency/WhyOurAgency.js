import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image'
import whyOurAgencyImage from '../../../assets/images/whyOurAgency.png'
import SectionTitleUnderline from '../../common/SectionTitleUnderline';

const counterData = [
    {
        id: 1,
        title: 'Satisfied Clients',
        total: 9875,
    },
    {
        id: 2,
        title: 'Project Lunched',
        total: 7894,
    },
    {
        id: 3,
        title: 'Years Completed',
        total: 65,
    },
]

const WhyOurAgency = () => {
    return (
        <Container className="why-agency__component">
            <Row>
                <Col md={6}>
                    <Image className="img-fluid" src={whyOurAgencyImage} alt="Why Our Agency" />
                </Col >
                <Col md={6}>
                    <h2 className='text-primary heading fw-bold'>Why Our Agency</h2>
                    <SectionTitleUnderline />
                    <p className="text-secondary mt-4">In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec volutpat metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet magna tempus hendrerit ut a odio.</p>

                    <p className="text-secondary">Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante, vehicula condimentum arcu.</p>

                    <Row xs={1} md={3} className="g-4">
                        {counterData.map(data => (
                            <Col key={data.id}>
                                <Card className="counter-box">
                                    <Card.Body className="text-center">
                                        <h2 className="text-primary fw-bold">{data.total}</h2>
                                        <Card.Text className="text-secondary">
                                            {data.title}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


        </Container>
    );
};

export default WhyOurAgency;