import React from 'react';
import { Link } from 'react-router-dom';
//assets
import arrowDown from '../assets/chevron-down-svgrepo-com.svg';
import menu from '../assets/align-right-svgrepo-com.svg';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-10 backdrop-blur bg-white/60 flex justify-between items-center py-5'>
            <div className='flex'>
                <div className='mx-4 font-bold text-lg cursor-default'>
                    LOGO
                </div>
                <div className='lg:flex hidden mx-5'>
                    <div className='mx-4 hover:bg-sky-100 transition-all cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'>
                            <p className='font-medium'>Home</p>
                        </Link>
                    </div>
                    <div className='mx-4 hover:bg-sky-100 transition-all cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Products</p>
                            <img className='w-3 ml-2' src={arrowDown} alt='arrDown' />
                        </Link>
                    </div>
                    <div className='mx-4 hover:bg-sky-100 transition-all cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Resources</p>
                            <img className='w-3 ml-2' src={arrowDown} alt='arrDown' />
                        </Link>
                    </div>
                    <div className='mx-4 hover:bg-sky-100 transition-all cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'>
                            <p className='font-medium'>Pricing</p>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center'>
                <div className='hidden md:flex py-2 px-3 rounded-full transition-all text-base font-medium cursor-pointer'>
                    <Link to='#'>Log in</Link>
                </div>
                <div className=' hidden md:flex mx-5 py-2 px-3 rounded-full text-white bg-black/80 hover:bg-black/70 transition-all text-base cursor-pointer'>
                    <Link to='#'>Sign up</Link>
                </div>
                <div className=' lg:hidden ml-6 cursor-pointer rounded-full transition-all flex items-center justify-center w-11 hover:bg-sky-50'>
                    <img className='w-9 m-1' src={menu} alt='menu' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;