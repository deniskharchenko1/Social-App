import React from 'react';
import {useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';

import './person-details.css';
import { getUser } from "../../../redux/users/actions";


const PersonDetails = ({match}) => {
  const user = useSelector(state => state.usersReducer.currentUser);   
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUser(match.params.userId));
  }, [dispatch, match]);
  
  console.log(match.params.userId);


  if (user == null ) {
    return <div>Выберите пользователя</div>
  }

  return (
    <div className="col-md-12">
      <div className="person-details card">
        
        <img className="person-image"
          src="https://via.placeholder.com/600/771796"
          alt="character"/>
        <div className="card-body">
          <h4>{user.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Email: </span>
              <span>{user.email}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Phone: </span>
              <span>{user.phone}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Website: </span>
              <span>{user.website}</span>
            </li>
          </ul>
          <Link to={`/posts/${user.id}`}>Посмотреть посты</Link>
        </div>
      </div>
    </div>
  )
}

export {PersonDetails};