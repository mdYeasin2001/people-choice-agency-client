import React from 'react';
import Image from 'next/image';
import { Row, Col} from 'react-bootstrap';

const ReviewPost = ({review}) => {
    return (
        <Row className='d-flex justify-content-center m-5'>
           <Col md={3}>
               <Image className='rounded-pill' src={review.image} alt={review.name}/>
            </Col> 
           <Col md={6} className='text-primary'>
               <p>{review.description}</p>
               <h4 className='fw-bold'>{review.name}</h4>
           </Col>
        </Row>
    );
};

export default ReviewPost;