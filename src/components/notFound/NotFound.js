import React from 'react';
import notFound from '../../images/404-error-template-3.png.webp'
const NotFound = () => {
    return (
        <div className='w-full h-100vh'>
            <img className='w-full h-[100vh] px-10 object-cover' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;