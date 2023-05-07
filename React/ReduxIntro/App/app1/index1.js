import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


// Redux middleware is a function that sits between the action creators and the reducers in a Redux application. Middleware intercepts every action that is dispatched in the application and can modify or enhance the behavior of those actions before they reach the reducers.
// Middleware functions can be used to implement a variety of features, such as logging, error reporting, asynchronous actions, or other custom behaviors. 

//store and middleware
const store = createStore(reducer, applyMiddleware(logger.default));

//reducer
function reducer(state = {amount: 1}, action){
    if(action.type === 'increment'){
        return {amount: state.amount + 1}
    }
    return state;
}

setInterval(() => {
    store.dispatch({type:'increment'});
}, 2000)


