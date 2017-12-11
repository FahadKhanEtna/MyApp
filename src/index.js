import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import Routes from './routes'
import reducers from './reducers'
const API_KEY ="88a66576df2c288b48c83f468eac2aaa";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>
  , document.querySelector('.container'));
