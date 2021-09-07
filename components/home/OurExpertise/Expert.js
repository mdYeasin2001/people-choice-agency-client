import React from 'react';
import Image from 'next/image';


const Expert = ({expert}) => {
    return (
        <div className='p-4 text-center text-primary'>
           <Image className='rounded' height={300} src={expert.image} alt={expert.name}/>
           <h3 className='fw-bold'>{expert.name}</h3>
           <p>{expert.position}</p>
        </div>
    );
};

export default Expert;