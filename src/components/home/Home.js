import React from 'react';
import useData from '../../hooks/useData';
import laptop from '../../images/laptop.jpg'
import Review from '../review/Review';
import './Home.css'
const Home = () => {
    const [data, setData] = useData()
    // const newData=data.slice(0,3)
    // console.log(newData)
    return (
        <div className='w-full h-[70vh] md:h-[88vh] px-10 ' >
            <div className='md:flex hero justify-between items-center h-full w-full'>
                <div className='w-[45rem] mx-auto py-[7rem] md:py-0 sm:order-1'>
                    <h1 className='text-[4rem]'>The Best Asus Laptop </h1>
                    <p className='text-[2rem] leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eos consequuntur molestias sit explicabo voluptate quas. Vitae explicabo qui non iure optio deleniti, doloribus dolores sint quae veniam illum voluptatibus minus modi voluptatem nihil sequi itaque. Culpa dicta qui dolores.</p>
                    <button className='py-4 px-7 bg-slate-900 text-2xl rounded-lg mt-5 text-white duration-300 ease hover:bg-slate-700'>Live Demo</button>
                </div>
                <div className='w-[40rem] sm:order-2 mx-auto'>
                    <img className='w-full h-auto object-cover' src={laptop} alt="" />
                </div>
            </div>
            <section className='text-center mb-[10rem]'>
                <h1 className='text-5xl text-center font-bold mb-[4rem] '>What Our Customer Say</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        data.slice(0, 3).map(data => <Review key={data.id} data={data} />)
                    }
                </div>
                <button className='py-3 px-6 bg-lime-800 mb-7 rounded-lg mt-9 text-3xl text-white'>Show All Review</button>
            </section>
        </div>


    );
};

export default Home;