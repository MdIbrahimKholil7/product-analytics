import React from 'react';
import { useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData';
import laptop from '../../images/laptop.jpg'
import Review from '../review/Review';
import './Home.css'
const Home = () => {
    const [data, setData] = useData()
    const navigate=useNavigate()
    return (
        <div className='w-full px-10 ' >
            <div className='md:flex hero justify-between h-[70vh] md:h-[88vh] items-center '>
                <div className='w-[45rem] mx-auto py-[7rem] md:py-0 sm:order-1'>
                    <h1 className='text-[4rem]'>The Best Asus Laptop </h1>
                    <p className='text-[2rem] leading-10'>Asus <small>SABERTOOTH Z170 MARK</small> 1 has come to the market.Its a wonderful choice for you dream.Its a new series model that Asus launch.</p>
                    <button className='py-4 px-7 bg-slate-900 text-2xl rounded-lg mt-[3rem] text-white duration-300 ease hover:bg-slate-700'>Live Demo</button>
                </div>
                <div className='w-[40rem] order-1 md:order-2 mx-auto'>
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
                <button onClick={()=> navigate('/customerReview')} className='py-3 px-6 bg-lime-800 mb-[5rem] rounded-lg mt-[5rem]  text-3xl text-white'>Show All Review</button>
            </section>
        </div>


    );
};

export default Home;