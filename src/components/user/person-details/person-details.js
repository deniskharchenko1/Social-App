import React, { Component } from 'react';
import { useState, useEffect } from "react";
import SocialapiService from '../../../services/social-service';

import './person-details.css';



// ==============hooks

const PersonDetails = () => {
  const [users] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, []);

  
  return (
    <div className="person-details card">
      
      <img className="person-image"
        src="https://via.placeholder.com/600/771796"
        alt="character"/>
      <div className="card-body">
        <h4>{name} {this.props.personId}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Email: </span>
            <span>{email}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Phone: </span>
            <span>{phone}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Website: </span>
            <span>{website}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export {PersonDetails};

// ===========hooks




export default class PersonDetails extends Component {

  socialapiService = new SocialapiService();

  state = {
    users: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.socialapiService
      .getPerson(personId)
      .then((users) => {
        this.setState({users})
      })
  }

  render() {
    if (!this.state.users) {
      return <span>Select a person from a list</span>;
    }

    const { name, phone, email, website } = this.state.users;

    return (
      <div className="person-details card">
        
        <img className="person-image"
          src="https://via.placeholder.com/600/771796"
          alt="character"/>
        <div className="card-body">
          <h4>{name} {this.props.personId}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Email: </span>
              <span>{email}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Phone: </span>
              <span>{phone}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Website: </span>
              <span>{website}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}



