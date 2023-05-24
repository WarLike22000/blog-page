import React from 'react';
//components
import Posts from '../components/Posts.jsx';
//query
import { GET_POSTS } from '../graphQL/queries.jsx';
import { useQuery } from '@apollo/client';
//assets gif
import loader from '../assets/gif/Double Ring-2.6s-200px.svg';

const Main = () => {

    const { loading, data, error } = useQuery(GET_POSTS);

    return (
        <div className='flex justify-center flex-wrap m-auto'>
            {
                data ?
                data.posts.map(post => <Posts key={post.id} post={post} />) :
                <div className='flex justify-center items-center h-screen'>
                    <img className='w-28' src={loader} alt='loading...' />
                </div>
            }
        </div>
    );
};

export default Main;