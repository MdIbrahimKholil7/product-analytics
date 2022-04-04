import React from 'react';
import useData from '../../hooks/useData';
import Review from '../review/Review';

const CustomerReview = () => {
    const [data]=useData()
    return (
        <div className='max-w-5xlxl mx-auto py-16 px-10'>
            <h1 className='text-5xl text-center font-bold mb-[5rem]'>Our Customer Review</h1>
            <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                {
                    data.map(review => <Review
                         key={review.id}  
                        data={review}
                    />)
                }
            </section>
        </div>
    );
};

export default CustomerReview;