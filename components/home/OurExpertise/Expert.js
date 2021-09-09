import React from 'react';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';


const Expert = ({expert}) => {
    return (
      <Col className='p-4 text-center text-primary'>
        <Image className='rounded' src={expert.image} alt={expert.name}/>
        <h3 className='fw-bold'>{expert.name}</h3>
        <p>{expert.position}</p>
      </Col> 
    );
};

export default Expert;