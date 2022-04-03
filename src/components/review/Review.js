import React from 'react';
import useData from '../../hooks/useData';

const Review = ({data}) => {
    const {review,img}=data
    // const newData=data.slice(0,3)
    return (
        <div className='max-w-4xl rounded-lg mx-auto pt-16 shadow-2xl px-5 py-5 w-[30rem] mb-14'>
            <div >
                
                <div className='text-center'>
                    <img className='w-[5rem] h-[5rem] mx-auto rounded-[50%] shadow-lg text-center' src={img} alt="" />
                    <p className='text-2xl mt-5'>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;