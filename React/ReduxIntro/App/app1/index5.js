import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

//action name constant
const inc = 'increment';
const dec = 'decrement';
const incByAmount = 'incrementByAmount';
const init = 'init';

//store and middleware
const store = createStore(reducer, applyMiddleware(logger.default, thunk.default));

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

//Async API call
// async function getUser(){
//     const {data} = await axios.get('http://localhost:3000/accounts/1');
//     console.log(data);
// }

// getUser();

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
    return {type: init, payload: value}
}

async function getUser(dispatch, getState){ //action creator using through thunk
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    //It will throw error because this is async action function and it will promise and action creator only handle plain object instead of promise
    // return {type: init, payload: data.amount};
    // dispatch({type: init, payload: data.amount});
    dispatch(initUser(data.amount));
}

setTimeout(() => {
    // store.dispatch(initUser());
    store.dispatch(getUser); //thunk 
}, 2000)


