//This Component recieves the text that the user inputs and returns (since the return statement is  within a ({}) we don't need to type 'return') an object with type of 'change searchfield' (which is the action and is a constant variable) and a paylod of text.

import {CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './Constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

//this action requests the robots list that takes the dispatch parameter and dispatches the pending action. Next, it fetches the robots API. Then it dispatches the request action with the payload of data. The catch dispatches the failed action with the payload of error. This is a higer oder funtion, that returns a funtion within a function. This allows the dispatch parameter to be used in the lower function.
export const requestRobots = () => (dispatch) =>{
  dispatch({type: REQUEST_ROBOTS_PENDING});
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}
