import React from "react";
import { useState, useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import Spinner from "../../spinner/spinner";


import "./item-list.css";

import { getUsers, getUser } from "../../../redux/users/actions";


const ItemListFunc = () => {
    const users = useSelector(state => state.usersReducer.fetchedUsers);
    const isLoading = useSelector(state => state.usersReducer.isLoading);
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(getUsers());
    }, [dispatch]);


    return (isLoading) ? (
      <Spinner />
    ) : (
      <ul className="item-list list-group">
        {users.map(user => 
          <li className="list-group-item"
            key={user.id}
            onClick={() => dispatch(getUser(user.id))}
            >
            {user.name}
          </li>
          )
        }
      </ul> 
    );
};


export { ItemListFunc };




