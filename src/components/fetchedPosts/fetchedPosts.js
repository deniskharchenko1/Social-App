import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {fetchPosts} from '../../redux/actions';
import Spinner from "../spinner/spinner";


export default () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Spinner />
    }

    if(!posts.length) {
        return (
            <>
                <p>First 5 Posts</p>
                <button onClick={() => dispatch(fetchPosts())} 
                        className='btn btn-primary mb-2'>
                            Download Posts REDUX SAGA
                </button>
            </>
        )
    }
    return (
        posts.map(post => (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className='card-title'>
                    Title: {post.title}
                    </h5>
                    <p>{post.body}</p>
                </div>
            </div>
            )
        )
    )
}