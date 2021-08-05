import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {fetchUsers} from '../../redux/actions';
import Spinner from "../spinner/spinner";


export default () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.users.fetchedUsers
    })
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Spinner />
    }

    if(!users.length) {
        return (
            <>
                <p>First 5 People</p>
                <button onClick={() => dispatch(fetchUsers())} 
                        className='btn btn-primary mb-2'>
                            Download People REDUX SAGA
                </button>
            </>
        )
    }
    return (
        users.map(user => (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className='card-title'>
                    {user.name}
                    </h5>
                    <p>{user.email}</p>
                </div>
            </div>
            )
        )
    )
}