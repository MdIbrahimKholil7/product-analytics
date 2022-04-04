import React from 'react';
import contact from '../../images/3-Jun-23-2021-02-47-41-19-AM.webp'
const Contact = () => {
    return (
        <div className='w-[90%] h-[80vh] mx-auto'>
            <h1 className='text-5xl text-center mt-[6rem]'>Contact Us</h1>
            <div className='flex items-center justify-between h-full w-full mx-auto mt-[5rem] md:mt-0'>
                <div className='md:flex items-center justify-between h-full w-[88rem] mx-auto'>
                    <form className='flex items-center justify-center flex-col md:w-[45rem] w-[38rem] mx-auto'>
                        <div className='w-[80%] mx-auto'>
                            <div className='text-left w-full'>
                                <label className='text-2xl mb-[1rem] block w-full mx-auto' htmlFor="">Name</label>
                                <input className='py-3 px-5 w-full mx-auto bg-slate-300 text-2xl rounded-lg outline-none mb-4 block placeholder:text-gray-500' type="text" placeholder='Enter your name' />
                            </div>
                            <div className='text-left  w-full'>
                                <label className='text-2xl mb-[1rem] w-full mx-auto block' htmlFor="">Email</label>
                                <input className='py-3 px-5  w-full mx-auto bg-slate-300 text-2xl rounded-lg outline-none mb-4 block placeholder:text-gray-500' type="text" placeholder='Enter your email' />
                            </div>
                            <div className='text-left  w-full '>
                                <label className='text-2xl  w-full mx-auto mb-[1rem] block' htmlFor="">Password</label>
                                <input className='py-3 px-5  w-full mx-auto bg-slate-300 text-2xl rounded-lg outline-none mb-4 block placeholder:text-gray-500' type="password" placeholder='Enter your password' />
                                <button className='py-3 px-6 text-3xl mx-auto md:mx-0 text-white rounded-lg bg-slate-500 mt-7 block'>Submit</button>
                            </div>
                        </div>

                    </form>
                    <div className='w-[32rem] mt-[4rem] md:mt-0 mx-auto'>
                        <img className='w-full object-cover' src={contact} alt="" />
                    </div>
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;