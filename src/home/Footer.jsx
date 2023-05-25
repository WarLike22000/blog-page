import React from 'react';

import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
//styles
import './Footer.css';

const Footer = () => {
    return (
        <div className=' shadow-inner flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center md:mx-auto mx-2 my-10 marginCSS p-2'>
            <div className='md:flex-row flex-col flex justify-between items-center w-full'>
                <div className='md:mr-16 mt-10'>
                    <h3 className=' font-semibold text-xl'>Do you want to know about the latest posts?</h3>
                    <p className=' font-medium text-gray-600 mt-2'>Join our 4000+ people.</p>
                </div>
                <div className='mt-10 md:w-1/2'>
                    <div className=' border-2 rounded-full w-full flex justify-between shadow-lg hover:shadow-none transition-all'>
                        <input className='px-3 w-full py-2 outline-none border-none rounded-full' placeholder='Enter your email' />
                        <button className='p-3 bg-black hover:bg-black/75 transition-all text-white rounded-full'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between items-center w-full my-16'>
                <div>
                    <h1 className=' font-semibold text-xl text-center lg:text-left'>LOGO</h1>
                    <p className=' font-medium text-center lg:text-left mt-1'>You can use other facilities.</p>
                </div>
                <div className='flex justify-between items-center flex-wrap md:flex-nowrap my-8'>
                    <div className='mr-8 serviceCSS'>
                        <h5>Product</h5>
                        <div><p>Overview</p></div>
                        <div><p>Features</p></div>
                        <div className='flex items-center'>
                            <p>Solutions</p>
                            <span className='ml-2 border-2 transition-all hover:bg-sky-50 border-black/75 px-3 rounded-full'>New</span>
                        </div>
                        <div><p>Tutorials</p></div>
                        <div><p>Pricing</p></div>
                        <div><p>Released</p></div>
                    </div>
                    <div className='mr-8 serviceCSS'>
                        <h5>Company</h5>
                        <div><p>About Us</p></div>
                        <div><p>Careers</p></div>
                        <div>
                            <p>Press</p>
                        </div>
                        <div><p>News</p></div>
                        <div><p>Media Kit</p></div>
                        <div><p>Contact</p></div>
                    </div>
                    <div className='mr-8 serviceCSS'>
                        <h5>Resources</h5>
                        <div><p>Blog</p></div>
                        <div><p>Newsletter</p></div>
                        <div>
                            <p>Events</p>
                        </div>
                        <div><p>Help Centre</p></div>
                        <div><p>Tutorials</p></div>
                        <div><p>Support</p></div>
                    </div>
                    <div className='mr-8 serviceCSS'>
                        <h5>Social</h5>
                        <div><p>Twitter</p></div>
                        <div><p>Linkedin</p></div>
                        <div>
                            <p>Facebook</p>
                        </div>
                        <div><p>GitHub</p></div>
                        <div><p>AngelList</p></div>
                        <div><p>Dribbble</p></div>
                    </div>
                    <div className='mr-8 serviceCSS'>
                        <h5>Legal</h5>
                        <div><p>Terms</p></div>
                        <div><p>Privacy</p></div>
                        <div>
                            <p>Cookies</p>
                        </div>
                        <div><p>Licenses</p></div>
                        <div><p>Settings</p></div>
                        <div><p>Contact</p></div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between flex-col-reverse md:flex-row items-center w-full'>
                <div>
                    <p className=' font-semibold'>© Built in 2023</p>
                </div>
                <IconContext.Provider value={{color: '#404344', size: '20px'}}>
                    <div className='flex iconCSS my-5'>
                        <div><BsTwitter /></div>
                        <div><BsGithub /></div>
                        <div><BsInstagram /></div>
                        <div><BsWhatsapp /></div>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
        </div>
    );
};

export default Footer;