import React from 'react';
import { Link } from 'react-router-dom';
//assets
import arrow from '../assets/arrow-up-right-svgrepo-com.svg';
//styles
import './Posts.css'

const OnlyPost = ( { data } ) => {

    const { coverImage: { url }, title, excerpt, slug } = data;
    
    return (
        <div className=' max-w-sm overflow-hidden rounded mx-2 bg-white/80 my-8 shadow-lg flex flex-col justify-end'>
            <div>
                <img className='sm:max-w-sm w-96 mt-2' src={url} alt='coverImg' />
            </div>
            <div>
                <div className='mx-2'>
                    <h2 className=' text-sm font-bold my-3'>{title}</h2>
                    <p className='text-black/60 text-xs font-medium mb-2'>{excerpt}</p>
                    <Link to={`/${slug}`}>
                        <div className='transitionImg flex items-center transition-all hover:bg-sky-100 rounded-md w-fit py-2 px-3 my-3'>
                            <div className='font-medium text-sm mr-2' to='#'>Read Post</div>
                            <img src={arrow} className='w-4 transition-all' alt='arr' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OnlyPost;