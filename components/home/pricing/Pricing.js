import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import basicPlanImage from '../../../assets/images/basicPlan.png';
import standardPlanImage from '../../../assets/images/standardPlan.png';
import premiumPlanImage from '../../../assets/images/premiumPlan.png';

const plans = [
    {
        id: 1,
        title: 'Basic Plan',
        image: basicPlanImage,
        price: 49,
        paymentSchema: 'Month',
        includedFeatures: [
            "Graphic Design",
            "Web Design",
            "UI/UX",
            "HTML/CSS",
            "SEO Marketing",
            "Business Analysis",
        ],
    },
    {
        id: 2,
        title: 'Standard Plan',
        image: standardPlanImage,
        price: 99,
        paymentSchema: 'Month',
        includedFeatures: [
            "Graphic Design",
            "Web Design",
            "UI/UX",
            "HTML/CSS",
            "SEO Marketing",
            "Business Analysis",
        ],
    },
    {
        id: 3,
        title: 'Premium Plan',
        image: premiumPlanImage,
        price: 149,
        paymentSchema: 'Month',
        includedFeatures: [
            "Graphic Design",
            "Web Design",
            "UI/UX",
            "HTML/CSS",
            "SEO Marketing",
            "Business Analysis",
        ],
    },
]

const Pricing = () => {
    return (
        <Container className="pricing__container">
            <Row xs={1} md={3} className="g-4">
                {plans.map(plan => (
                    <Col key={plan.id}>
                        <Card className="pricing_card">
                            <Card.Body className="text-center">
                                <h3 className="text-primary fw-bold mt-4">{plan.title}</h3>
                                <Image src={plan.image} alt={plan.title} />
                                <h2 className="price fw-bold mb-4">${plan.price}<small className="fw-normal">/{plan.paymentSchema}</small></h2>
                                {
                                    plan.includedFeatures.map(feature =>
                                        <Card.Text key={feature} className="text-secondary features">
                                            {feature}
                                        </Card.Text>)
                                }
                                <button className="btn btn-corner btn-outline-danger features mt-2">Start Now</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Pricing;