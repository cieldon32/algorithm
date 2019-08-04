import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {routerReducer} from 'react-router-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from 'containers/index/';
import * as reducers from 'reducers';

import "./index.scss";

const store = createStore(combineReducers({...reducers, routing: routerReducer}));

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Index} />>
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('container'));

