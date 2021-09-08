import React from 'react';
import Image from 'next/image';

const ReviewPost = ({review}) => {
    return (
        <div className='d-flex justify-content-center row m-5'>
           <div className='col-md-3'>
               <Image className='rounded-pill' src={review.image} alt={review.name}/>
            </div> 
           <div className='text-primary col-md-6'>
               <p>{review.description}</p>
               <h4 className='fw-bold'>{review.name}</h4>
           </div>
        </div>
    );
};

export default ReviewPost;