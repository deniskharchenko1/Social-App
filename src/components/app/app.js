import React, {Component} from 'react';
import Header from '../header';
import {ItemList, ItemListFunc} from '../item-list';
import PersonDetails from '../person-details';
import PostDetails from '../post-details';
import PostList from '../post-list';
import CommentsList from '../comments-list';



import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from '../../redux/rootReducer';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchSagas} from '../../redux/rootSagas';

import './app.css';
import FetchedPosts from "../fetchedPosts/fetchedPosts";
import FetchedUsers from "../fetchedUsers/fetchedUsers";
import FetchedComments from "../fetchedComments/fetchedComments";




const sagaMiddleware = createSagaMiddleware();
let enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(watchSagas);

export default class App extends Component {


  // state = {
  //   selectedPerson: 1,
  //   selectedPost: 1
  // };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  onPostSelected = (postId) => {
    this.setState({
      selectedPost: postId
    });
  }

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList onItemSelected={this.onPersonSelected}/>
            </div>

            <div className="col-md-6">
              <ItemListFunc onItemSelected={this.onPersonSelected}/>
            </div>

            

            <div className="col-md-12">
              <PersonDetails personId={this.state.selectedPerson}/>
            </div>
  
            {/* <Route path='/people' component= {PersonDetails} exact/> */}
  
            <div className="col-md-6">
              <PostList postId={this.state.selectedPerson}
                        onPostSelected={this.onPostSelected}/>
            </div>

            <div className="col-md-6">
              <PostDetails postId={this.state.selectedPost}/>
              <CommentsList postId={this.state.selectedPost}/>
            </div>

            <div className="col-md-6 mb-4">
              <FetchedPosts/>
            </div>

            <div className="col-md-6 mb-4">
              <FetchedUsers/>
            </div>

            <div className="col-md-6 mb-4">
              <FetchedComments/>
            </div>
            

          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

  
  
