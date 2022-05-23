import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import Header from "../header";
import { PeopleList } from "../user/people-list";
import { PersonDetails } from "../user/person-details";
import { PostList } from "../post/post-list";
import { CommentsList } from "../comment/comments-list";
import { rootReducer } from "../../redux/rootReducer";
import { watchSagas } from "../../redux/rootSagas";

import "./app.css";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(watchSagas);

export type RootStoreType = ReturnType<typeof rootReducer>;

declare module "react-redux" {
  interface DefaultRootState extends RootStoreType {}
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div className="row mb2">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <h2>Welcome to Social-App</h2>}
                />

                <Route path="/people" exact component={PeopleList} />
                <Route path="/people/:userId?" component={PersonDetails} />

                <Route path="/posts/:userId?" component={PostList} />
                <Route path="/comments/:postId" component={CommentsList} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
