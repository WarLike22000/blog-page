import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_POST } from '../graphQL/queries';
import { useQuery } from '@apollo/client';

import sanitizeHtml from 'sanitize-html';
import OnlyPost from './OnlyPost';

//assets gif
import loader from '../assets/gif/Double Ring-2.6s-200px.svg';

const Post = () => {

    const { slug } = useParams();
    const { loading, data, error } = useQuery(GET_POST, {
        variables: { slug: slug }
    });
    !loading && console.log(data)

    
    return (
        <>
        {
            data ?
        <div className='flex flex-col my-8'>
            <div className='w-full border-b-2 mb-3 dark:border-white/60 border-black/60 p-2'>
                <h1 className='font-semibold dark:text-white sm:text-xl text-base'>{data.post.title}</h1>
            </div>
            <div className='mx-auto'>
                <img className='xl:max-w-5xl lg:max-w-3xl md:max-w-xl' src={data.post.coverImage.url} />
            </div>
            <div className='flex items-center mt-8 md:mx-16 mx-5 mb-5'>
                <div className='mr-4'>
                    <img className='w-14 rounded-full' src={data.post.author.picture.url} />
                </div>
                <div className='dark:text-white text-black/70'>
                    <p className=' font-semibold'>{data.post.author.name}</p>
                    <span className=' font-medium text-sm'>{data.post.author.title}</span>
                </div>
            </div>
            <div className='dark:text-white md:mx-12 mx-2 font-medium text-lg' dangerouslySetInnerHTML={{__html: sanitizeHtml(data.post.content.html) }}></div>
            <div className='dark:text-white md:mx-12 mx-2 font-medium text-xl mt-16'>
                <p>Other posts by this author</p>
            </div>
            <div className='flex flex-wrap mx-2'>
                {
                    data.post.author.posts.map(item => <OnlyPost key={item.id} data={item} />)
                }
            </div>
        </div> :
            <div className='flex justify-center items-center h-screen'>
                <img className='w-28' src={loader} alt='loading...' />
            </div>

        }
        </>
    );
};

export default Post;