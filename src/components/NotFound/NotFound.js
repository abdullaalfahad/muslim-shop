import React from 'react';
import Image from '../../images/page-not-found-404.png';

const NotFound = () => {
    return (
        <div className='w-50 mx-auto'>
            <img src={Image} className='w-100' alt="404" />
        </div>
    );
};

export default NotFound;