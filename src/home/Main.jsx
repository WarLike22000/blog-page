import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
//components
import Posts from '../components/Posts.jsx';
//query
import { GET_POSTS } from '../graphQL/queries.jsx';
import { useQuery } from '@apollo/client';
//assets gif
import loader from '../assets/gif/Double Ring-2.6s-200px.svg';

const Main = ( { checked } ) => {

    const { loading, data, error } = useQuery(GET_POSTS);

    return (
        <div className='flex justify-center flex-wrap m-auto'>
            {
                data ?
                data.posts.map(post => <Posts key={post.id} post={post} />) :
                <div className='flex justify-center items-center h-screen'>
                    <ThreeDots 
                        height="80" 
                        width="80" 
                        radius="9"
                        color={checked ? '#9DB2BF' : '#27374D'} 
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        />
                </div>
            }
        </div>
    );
};

export default Main;