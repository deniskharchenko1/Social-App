import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import Spinner from "../../spinner/spinner";
import {Link} from 'react-router-dom';



import "./people-list.css";

import { getUsers, getUser } from "../../../redux/users/actions";


const PeopleList = () => {
  const users = useSelector(state => state.usersReducer.fetchedUsers);
  const isLoading = useSelector(state => state.usersReducer.isLoading);
  const currentUser = useSelector(state => state.usersReducer.currentUser);

  const dispatch = useDispatch();

  // console.log(match.params.userId);

  
  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  return (isLoading) ? (
    <Spinner />
  ) : (
    <div className="col-md-6">
      <ul className="item-list list-group">
        {users.map(user => 
          <li className={`list-group-item ${( currentUser !== null && user.id === currentUser.id) ? "active" : ""}`}
            key={user.id}
            onClick={() => dispatch(getUser(user.id))}
          >
            <p>{user.name}</p>
            <Link to={`people/${user.id}`}>Посмотреть пользователя</Link>
          </li>
          )
        }
      </ul> 
    </div>
  );
};


export {PeopleList} ;




