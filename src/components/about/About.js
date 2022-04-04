import React from 'react';
import about from '../../images/about.jpg'
const About = () => {
    return (
        <div className='w-full md:h-[80vh] h-[60vh]'>
            <div className='w-[80%] h-full mx-auto'>
                <h1 className='text-5xl text-center font-bold mt-[7rem] md:mt-11'>About Us</h1>
                <div className='md:flex justify-between items-center md:w-[87rem w-auto] h-full mx-auto'>
                    <div className='md:w-[50rem] w-[40rem] md:mb-0 mb-[7rem] md:mt-0 mt-[9rem]'>
                        <h1 className='text-5xl font-bold mb-[2rem]'>Who We Are</h1>
                        <p className='text-3xl leading-10'>We art the best seller.We are always try to give best product of our customer.We have best quality product.</p>
                        <button className='py-4 px-7 bg-teal-900 text-white mt-8 text-2xl rounded-lg'>Learn More</button>
                    </div>
                    <div className='md:w-[70rem] w-[40rem] md:order-2 order-1'>
                        <img className='w-full h-full' src={about} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;