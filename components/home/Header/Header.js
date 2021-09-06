import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import HeaderNav from '../../common/HeaderNav';
import headerImg from '../../../assets/images/image04.png';



const Header = () => {
    return (
        <main className='header_container'>
            <HeaderNav/>
            <Row
            style={{ height: "600px"}}
            className="d-flex px-3 align-items-center"
          >
            <Col md={5} className="offset-md-1">
              <h1 className="fw-bold mb-4 text-white">
                We Design Interfaces<br/>That Users Love
              </h1>
              <p className="fw-normal mb-3 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
                pariatur at est vero nihil odio dolorum illum dolor soluta sequi!
              </p>
              <button className="btn btn-secondary rounded-pill p-3">Learn more</button>
            </Col>
            <Col Col={6}>
              <Image height={500} src={headerImg} alt="Header Image" />
            </Col>
          </Row>
        </main>
    );
};

export default Header;