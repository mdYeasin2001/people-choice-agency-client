import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';
import { FaLaptopCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { AiOutlineSolution } from 'react-icons/ai';
import SectionTitleUnderline from '../common/SectionTitleUnderline';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Strategy & Research',
            icon: <BiCodeAlt />,
            description: 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.'
        },
        {
            id: 2,
            title: 'Web Development',
            icon: <FaLaptopCode />,
            description: 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.'
        },
        {
            id: 3,
            title: 'Web Solution',
            icon: <AiOutlineSolution />,
            description: 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.'
        }
    ]

    return (
        <Container className="py-5">
            <Row className="gx-3 pb-4">
                <h2 className="text-center display-6 fw-bold text-primary">Our Specialization</h2>
                <div className="d-flex justify-content-center pb-4">
                    <SectionTitleUnderline />
                </div>
            </Row>
            <Row className="g-3">
                {services.map(service =>
                    <Service
                        title={service.title}
                        key={service.id}
                        description={service.description}
                        icon={service.icon}
                    />
                )}
            </Row>
        </Container>
    );
};

export default Services;