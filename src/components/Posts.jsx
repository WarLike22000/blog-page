import React from 'react';
import { Link } from 'react-router-dom';
//assets
import arrow from '../assets/arrow-up-right-svgrepo-com.svg';

//css
import './Posts.css';

const Posts = ( { post } ) => {

    const { coverImage: { url }, author: { name }, date, title, excerpt, slug } = post;
    
    return (
        <div className='dark:bg-white/80 dark:shadow-white/20 shadow-lg sm:w-96 w-72 m-5 flex flex-col justify-end heightPost cursor-pointer transition-all rounded-md overflow-hidden'>
            <div className=' h-60 bg-contain relative' style={{ backgroundImage: `url(${url})` }}>
                <div className='backdrop-blur absolute bottom-0 bg-white/5 w-full p-3'>
                    <p className='text-white font-semibold'>{name}</p>
                    <p className='text-white font-light' >{date}</p>
                </div>
            </div>

            <div className='mx-2'>
                <h2 className=' text-sm font-bold my-3'>{title}</h2>
                <p className='text-black/60 text-sm font-medium mb-2'>{excerpt}</p>
                <Link to={`/${slug}`}>
                    <div className='transitionImg flex items-center transition-all hover:bg-sky-100 rounded-md w-fit py-2 px-3 my-3'>
                        <div className='font-medium text-sm mr-2' to='#'>Read Post</div>
                        <img src={arrow} className='w-4 transition-all' alt='arr' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Posts;