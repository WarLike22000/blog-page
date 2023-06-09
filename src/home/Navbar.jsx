import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Drawer, Collapse } from '@mui/material';
//assets
import arrowDown from '../assets/down-arrow.png';
import arrowDown2 from '../assets/down-arrow (1).png';
import menu from '../assets/menu.png';
import menu2 from '../assets/menu (1).png';
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

const Navbar = ( { checked } ) => {

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
        <div className='sticky top-0 z-10 backdrop-blur dark:bg-slate-900/60 bg-white/60 flex justify-between items-center py-5'>
            <Drawer className='backdrop-blur-md' open={open} onClose={closeHandler} anchor='top'>
                <div className='py-5'>
                    <div onClick={() => setOpen(false)} className='mx-4 py-2 hover:bg-sky-100  cursor-pointer px-3 rounded'>
                        <Link to='/'>
                            <p className='font-medium'>Home</p>
                        </Link>
                    </div>
                    <div onClick={() => setClickProduct(!clickProduct)} onMouseEnter={() => setOpenProduct(true)} onMouseLeave={() => setOpenProduct(false)} className='mx-4 py-2 hover:bg-sky-100  cursor-pointer px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Products</p>
                            <img className={`w-3 ml-2 ${clickProduct && 'rotate-180'} `} src={arrowDown} alt='arrDown' />
                        </Link>
                        <Collapse onClick={closeHandler} in={clickProduct}>
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
                    <div onClick={() => setClickResources(!clickResources)} onMouseEnter={() => setOpenResources(true)} onMouseLeave={() => setOpenResources(false)} className='mx-4 py-2 hover:bg-sky-100 cursor-pointer px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Resources</p>
                            <img className={`w-3 ml-2 ${clickResources && 'rotate-180'} `} src={arrowDown} alt='arrDown' />
                        </Link>
                        <Collapse onClick={closeHandler} in={clickResources}>
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
                    <div onClick={() => setOpen(false)} className='mx-4 py-2 hover:bg-sky-100  cursor-pointer px-3 rounded'>
                        <Link to='#'>
                            <p className='font-medium'>Pricing</p>
                        </Link>
                    </div>

                    <div className='flex ml-4'>
                        <div onClick={() => setOpen(false)} className='dark:text-white py-2 px-3 border rounded-full  text-base font-medium cursor-pointer'>
                            <Link to='/login'>Log in</Link>
                        </div>
                        <div onClick={() => setOpen(false)} className='w-fit mx-5 py-2 px-3 rounded-full dark:bg-white dark:text-black font-semibold text-white bg-black/80 hover:bg-black/70 dark:hover:bg-sky-100  text-base cursor-pointer'>
                            <Link to='/signUp'>Sign up</Link>
                        </div>
                    </div>
                    
                </div>
            </Drawer>
            <div className='flex'>
                <div className='dark:text-white mx-4 font-bold text-lg cursor-default'>
                    LOGO
                </div>
                <div className='lg:flex hidden mx-5'>
                    <div className='dark:hover:text-black dark:text-white mx-4 hover:bg-sky-100  cursor-pointer py-1 px-3 rounded'>
                        <Link to='/'>
                            <p className='font-medium'>Home</p>
                        </Link>
                    </div>
                    <div onMouseEnter={() => setOpenProduct(true)} onMouseLeave={() => setOpenProduct(false)} className='dark:hover:text-black dark:text-white relative transformCss mx-4 hover:bg-sky-100  cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'  className='flex items-center'>
                            <p className='font-medium'>Products</p>
                            <img className='w-3 ml-2' src={checked ? arrowDown2 : arrowDown} alt='arrDown' />
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
                    <div onMouseEnter={() => setOpenResources(true)} onMouseLeave={() => setOpenResources(false)} className='dark:hover:text-black dark:text-white relative transformCss mx-4 hover:bg-sky-100  cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'  className='  flex items-center'>
                            <p className='font-medium'>Resources</p>
                            <img className='w-3 ml-2' src={checked ? arrowDown2 : arrowDown} alt='arrDown' />
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
                    <div className='dark:hover:text-black dark:text-white mx-4 hover:bg-sky-100  cursor-pointer py-1 px-3 rounded'>
                        <Link to='#'>
                            <p className='font-medium'>Pricing</p>
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='flex items-center'>
                <div className='dark:text-white hidden md:flex py-2 px-3 rounded-full  text-base font-medium cursor-pointer'>
                    <Link to='/login'>Log in</Link>
                </div>
                <div className=' hidden md:flex mx-5 py-2 px-3 rounded-full dark:bg-white dark:text-black font-semibold text-white bg-black/80 hover:bg-black/70 dark:hover:bg-sky-100  text-base cursor-pointer'>
                    <Link to='/signUp'>Sign up</Link>
                </div>
                <div onClick={() => setOpen(!open)} className=' lg:hidden ml-6 cursor-pointer rounded-full  flex items-center justify-center w-11'>
                    <img className='w-9 m-1' src={checked ? menu2 : menu} alt='menu' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;