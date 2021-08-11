import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../../spinner/spinner";


import "./item-list.css";
import { useDispatch } from "react-redux";
import {getUsers} from '../../../redux/users/actions';
import {fetchUsers} from '../../../redux/users/api'

const ItemListFunc = () => {
    const [peopleList] = useState([]);
    const dispatch = useDispatch();
    

    useEffect(() => {
      dispatch(getUsers());
    }, []);


    const renderedItems = (peopleList) => {
      return isLoading ? (
        <Spinner />
      ) : (
        peopleList.map(({ id, name }) => {
          return (
            <li className="list-group-item"
              key={id}
              onClick={() => dispatch(fetchUsers())}>
              {name}
            </li>
          );
        })
      );
    };

    return (
      <ul className="item-list list-group">
        {renderedItems(peopleList)}
      </ul>
    );
};


export { ItemListFunc };







