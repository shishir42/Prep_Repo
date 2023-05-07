import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';

//action name constant
const inc = 'increment';
const dec = 'decrement';
const incByAmount = 'incrementByAmount';
const init = 'init';

//store and middleware
const store = createStore(reducer, applyMiddleware(logger.default));

//reducer
function reducer(state = {amount: 1}, action){
    switch (action.type) {
        case init:
            return {amount: action.payload}
        case inc:
            return {amount: state.amount + 1}
        case dec:
            return {amount: state.amount - 1}
        case incByAmount:
            return {amount: state.amount + action.payload}
        default:
            return state;
    }
}

//action creators
function increment(){
    return {type:inc};
}

function decrement(){
    return {type:dec};
}

function incrementByAmount(value){
    return {type:incByAmount, payload: value};
}

function initUser(value){
    return {type: init, payload: value};
}

setInterval(() => {
    // store.dispatch({type:'increment'});
    // store.dispatch({type:'decrement'});
    // store.dispatch({type:'incrementByAmount', payload: 5});

    // store.dispatch(increment());
    // store.dispatch(decrement());
    // store.dispatch(incrementByAmount(3));
    store.dispatch(initUser(111));
}, 2000)


