import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {fetchComments} from '../../redux/actions';
import Spinner from "../spinner/spinner";


export default () => {
    const dispatch = useDispatch();
    const comments = useSelector((state) => {
        return state.comments.fetchedComments
    })
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Spinner />
    }

    if(!comments.length) {
        return (
            <>
                <p>First 5 Comments</p>
                <button onClick={() => dispatch(fetchComments())} 
                        className='btn btn-primary mb-2'>
                            Download comments REDUX SAGA
                </button>
            </>
        )
    }
    return (
        comments.map(comment => (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className='card-title'>
                    CommentTitle: {comment.name}
                    </h5>
                    <p>{comment.body}</p>
                </div>
            </div>
            )
        )
    )
}