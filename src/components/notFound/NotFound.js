import React from 'react';
import notFound from '../../images/404page.png'
const NotFound = () => {
    return (
        <div className='w-full h-full'>
            <img className='w-full h-[100vh] object-cover' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;