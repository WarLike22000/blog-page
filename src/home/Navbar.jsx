import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Drawer, Collapse } from '@mui/material';
//assets
import arrowDown from '../assets/chevron-down-svgrepo-com.svg';
import menu from '../assets/align-right-svgrepo-com.svg';
//assetsNavbar
import overview from '../assets/Navbar/file.png';
import features from '../assets/Navbar/new-features.png';
import solutions from '../assets/Navbar/idea.png';
import tutorials from '../assets/Navbar/tutorial.png';

import blog from '../assets/Navbar/blogging.png';
import newsletter from '../assets/Navbar/email.png';
import events from '../assets/Navbar/event.png';
import helpCentre from '../assets/Navbar/call-centre.png';
//styles
import './Navbar.css';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [openProduct, setOpenProduct] = useState(false);
    const [openResources, setOpenResources] = useState(false);

    const [clickProduct, setClickProduct] = useState(false)
    const [clickResources, setClickResources] = useState(false)
    
    const closeHandler = () => {
        setOpen(false)
        setClickProduct(false)
        setClickResources(false)
    }
    
    return (
        <div className='sticky top-0 z-10 backdrop-blur bg-white/60 flex justify-between items-center py-5'>
            <Drawer className='backdrop-blur-md' open={open} onClose={closeHandler} anchor='top'>
                <div className='py-5'>
                    <div onClick={() => setOpen(false)} className='mx-4 py-2 hover:bg-sky-100 transition-all cursor-pointer px-3 rounded'>
                        <Link to='#'>
                            <p className='font-medium'>Home</p>
                        </Link>
                    </div>
                    <div onClick={() => setClickProduct(!clickProduct)} onMouseEnter={() => setOpenProduct(true)} onMouseLeave={() => setOpenProduct(false)} className='mx-4 py-2 hover:bg-sky-100 transition-all cursor-pointer px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Products</p>
                            <img className={`w-3 ml-2 ${clickProduct && 'rotate-180'} transition-all`} src={arrowDown} alt='arrDown' />
                        </Link>
                        <Collapse in={clickProduct}>
                            <div className='collapseCSS'>
                                <div>
                                    <nav>
                                        <img src={overview} alt='overview' />
                                        <p>Overview</p>
                                    </nav>
                                    <span>You can use other facilities.</span>
                                </div>
                                <Divider variant='fullWidth' />
                                <div>
                                    <nav>
                                        <img src={features} alt='features' />
                                        <p>Features</p>
                                    </nav>
                                    <span>You can use other facilities.You can use other facilities.</span>
                                </div>
                                <Divider variant='fullWidth' />
                                <div>
                                    <nav>
                                        <img src={solutions} alt='solutions' />
                                        <p>Solutions</p>
                                    </nav>
                                    <span>You can use other facilities.</span>
                                </div>
                                <Divider variant='fullWidth' />
                                <div>
                                    <nav>
                                        <img src={tutorials} alt='tutorials' />
                                        <p>Tutorials</p>
                                    </nav>
                                    <span>You can use other facilities.You can use other facilities.</span>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                    <div onClick={() => setClickResources(!clickResources)} onMouseEnter={() => setOpenResources(true)} onMouseLeave={() => setOpenResources(false)} className='mx-4 py-2 hover:bg-sky-100 transition-all cursor-pointer px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Resources</p>
                            <img className={`w-3 ml-2 ${clickResources && 'rotate-180'} transition-all`} src={arrowDown} alt='arrDown' />
                        </Link>
                        <Collapse in={clickResources}>
                        <div className='collapseCSS'>
                            <div>
                                <nav>
                                    <img src={blog} alt='blog' />
                                    <p>Blog</p>
                                </nav>
                                <span>You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={newsletter} alt='newsletter' />
                                    <p>Newsletter</p>
                                </nav>
                                <span>You can use other facilities.You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={events} alt='events' />
                                    <p>Events</p>
                                </nav>
                                <span>You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={helpCentre} alt='helpCentre' />
                                    <p>Help Centre</p>
                                </nav>
                                <span>You can use other facilities.You can use other facilities.</span>
                            </div>
                        </div>
                        </Collapse>
                    </div>
                    <div onClick={() => setOpen(false)} className='mx-4 py-2 hover:bg-sky-100 transition-all cursor-pointer px-3 rounded'>
                        <Link to='#'>
                            <p className='font-medium'>Pricing</p>
                        </Link>
                    </div>
                </div>
            </Drawer>
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
                    <div onMouseEnter={() => setOpenProduct(true)} onMouseLeave={() => setOpenProduct(false)} className=' relative transformCss mx-4 hover:bg-sky-100 transition-all cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Products</p>
                            <img className='w-3 ml-2' src={arrowDown} alt='arrDown' />
                        </Link>
                        <div className={`${openProduct ? 'flex' : 'hidden'} w-96 bg-white rounded flex-col mouseCss`}>
                            <div>
                                <nav>
                                    <img src={overview} alt='overview' />
                                    <p>Overview</p>
                                </nav>
                                <span>You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={features} alt='features' />
                                    <p>Features</p>
                                </nav>
                                <span>You can use other facilities.You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={solutions} alt='solutions' />
                                    <p>Solutions</p>
                                </nav>
                                <span>You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={tutorials} alt='tutorials' />
                                    <p>Tutorials</p>
                                </nav>
                                <span>You can use other facilities.You can use other facilities.</span>
                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={() => setOpenResources(true)} onMouseLeave={() => setOpenResources(false)} className=' relative transformCss mx-4 hover:bg-sky-100 transition-all cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Resources</p>
                            <img className='w-3 ml-2' src={arrowDown} alt='arrDown' />
                        </Link>
                        <div className={`${openResources ? 'flex' : 'hidden'} w-96 bg-white rounded flex-col mouseCss`}>
                            <div>
                                <nav>
                                    <img src={blog} alt='blog' />
                                    <p>Blog</p>
                                </nav>
                                <span>You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={newsletter} alt='newsletter' />
                                    <p>Newsletter</p>
                                </nav>
                                <span>You can use other facilities.You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={events} alt='events' />
                                    <p>Events</p>
                                </nav>
                                <span>You can use other facilities.</span>
                            </div>
                            <Divider variant='fullWidth' />
                            <div>
                                <nav>
                                    <img src={helpCentre} alt='helpCentre' />
                                    <p>Help Centre</p>
                                </nav>
                                <span>You can use other facilities.You can use other facilities.</span>
                            </div>
                        </div>
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
                <div onClick={() => setOpen(!open)} className=' lg:hidden ml-6 cursor-pointer rounded-full transition-all flex items-center justify-center w-11 hover:bg-sky-50'>
                    <img className='w-9 m-1' src={menu} alt='menu' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;