import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
//middleware
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

//imprts reducer
import {searchRobots, requestRobots} from './Reducers';

//creates the middleware via importing "createLogger" from redux-logger, to apply the middleware it needs to be passed through redux.
const logger = createLogger();

//combines the reducers into one
const rootReducer = combineReducers({searchRobots, requestRobots})

//creates the store, the middleware's are in order. thunk gets ran before logger.
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  //provider allows us to pass the store state to the components
  <Provider store={store}>
    <App/>
  </Provider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
