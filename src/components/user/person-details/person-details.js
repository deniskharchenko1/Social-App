import React from 'react';
import { useSelector} from "react-redux";

import './person-details.css';


const PersonDetails = () => {
  const user = useSelector(state => state.usersReducer.currentUser);   
  
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
        </div>
      </div>
    </div>
  )
}

export {PersonDetails};