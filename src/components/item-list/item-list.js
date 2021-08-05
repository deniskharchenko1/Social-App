import React, { Component } from "react";
import { useState, useEffect } from "react";
import SocialapiService from "../../services/social-service";
import Spinner from "../spinner/spinner";
import getAllPeople from '../../services/social-service';

import "./item-list.css";
import { useDispatch } from "react-redux";
import {getUsers} from '../../redux/users/actions';

//======useHooks
const ItemListFunc = ({ onItemSelected }) => {
    const [peopleList, setPeopleList] = useState([]);
    const dispatch = useDispatch();
    

    useEffect(() => {
      getAllPeople().then((peopleList) => {
        setPeopleList(peopleList);  
      });
      dispatch(getUsers());
    }, []);


    


    const renderedItems = (peopleList) => {
      return peopleList.length === 0 ? (
        <Spinner />
      ) : (
        peopleList.map(({ id, name }) => {
          return (
            <li className="list-group-item"
              key={id}
              onClick={() => onItemSelected(id)}>
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

//======useHooks

class ItemList extends Component {

  // socialapiService = new SocialapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      );
    });
  }

  render() {

    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}

export { ItemList, ItemListFunc };
// ==========




// export default class ItemList extends Component {

//   socialapiService = new SocialapiService();

//   state = {
//     peopleList: null
//   };

//   componentDidMount() {
//     this.socialapiService
//       .getAllPeople()
//       .then((peopleList) => {
//         this.setState({
//           peopleList
//         });
//       });
//   }

//   renderItems(arr) {
//     return arr.map(({id, name}) => {
//       return (
//         <li className="list-group-item"
//             key={id}
//             onClick={() => this.props.onItemSelected(id)}>
//           {name}
//         </li>
//       );
//     });
//   }

//   render() {

//     const { peopleList } = this.state;

//     if (!peopleList) {
//       return <Spinner />;
//     }

//     const items = this.renderItems(peopleList);

//     return (
//       <ul className="item-list list-group">
//         {items}
//       </ul>
//     );
//   }
// }




// redux======================

// import React, { Component } from "react";
// import "./item-list.css";

// class PeopleList extends Component {
//   render () {
//     const {peopleList} = this.props;
//     return (
//       <ul>
//         {
//           peopleList.map((item) => {
//             return (
//               <li key={item.id}></li>
//             )
//           })
//         }
//       </ul>
//     )
//   }
// }

















