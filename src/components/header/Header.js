import React, { useState } from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import logo2 from '../../images/logo2.png'
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false)
    const links = [
        { name: 'Home', path: '/', id: 1 },
        { name: 'Review', path: '/review', id: 2 },
        { name: 'Blog', path: '/blog', id: 3 },
        { name: 'About', path: '/about', id: 4 },
        { name: 'Contact', path: '/contact', id: 5 },
        { name: 'Dashboard', path: '/dashboard', id: 6 },
    ]
    return (
        <div className='w-full relative h-[8rem] bg-gray-700 text-white md:px-8 px-4 '>
            <nav className='max-w-screen-lg mx-auto flex justify-between items-center h-full '>
                <div className="logo">
                    <img src={logo2} alt="" />
                </div>
                
                <ul className={` relative md:flex ${open ? 'menu' : 'terminets'}`}>
                    {
                        links.map(link => <li key={link.id}>
                            <NavLink
                                className={({ isActive }) => isActive ? 'text-red-500 text-3xl ml-5' : 'text-3xl ml-5'}
                                to={link.path}
                            >{link.name}</NavLink>
                        </li>)
                    }
                </ul>
                <div className=' md:hidden' onClick={() => setOpen(!open)}>
                {
                    open ? <XIcon className='w-9 h-9 font-white' /> : <MenuIcon className='w-9 h-9 font-white' />
                }
            </div>
            </nav>
            
        </div>
    );
};

export default Header;