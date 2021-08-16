import React, {Component} from 'react';
import Header from '../header';
import { ItemListFunc} from '../user/item-list';
import {PersonDetails} from '../user/person-details';
import {PostList} from '../post/post-list';
import {CommentsList} from '../comment/comments-list';



import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from '../../redux/rootReducer';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {watchSagas} from '../../redux/rootSagas';

import './app.css';




const sagaMiddleware = createSagaMiddleware();
let enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(watchSagas);

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Header />
          <div className="row mb2">
            <div className="col-md-6">
              <ItemListFunc />
            </div>

            <div className="col-md-12">
              <PersonDetails />
            </div>

            <div className="col-md-6">
              <PostList />
            </div>

            <div className="col-md-6">
              <CommentsList />
            </div>

          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

  
  
