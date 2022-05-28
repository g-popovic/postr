import React from 'react';
import Navbar from '../Reusable/Navbar';
import Post from '../Reusable/Post';
import './explore.scss';

export default function ExplorePage() {
    return (
        <div className='page-container'>
            <Navbar />
            <div className='posts-container'>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}
