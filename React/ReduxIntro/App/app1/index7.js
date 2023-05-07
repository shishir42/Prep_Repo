// Multiple reducers (accounts and bonus)

import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

//action name constant
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmount = 'account/incrementByAmount';
const init = 'account/init';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulfilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';

const incBonus = 'bonus/increment';

//store and middleware
const store = createStore(combineReducers({
    accountReducer, 
    bonusReducer}), 
    applyMiddleware(logger.default, thunk.default));

// https://github.com/reduxjs/redux-thunk


// Thunk middleware for Redux. It allows writing functions with logic inside that can interact with a Redux store's dispatch and getState methods.

// With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and lets you write async logic that interacts with the store.

// Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.


//reducer
function accountReducer(state = {amount: 1}, action){
    switch (action.type) {
        case getAccUserFulfilled:
            return {amount: action.payload, pending: false}
        case getAccUserRejected:
            return { ...state, error: action.error, pending: false }
        case getAccUserPending:
            return {...state, pending: true}
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

function bonusReducer(state = {points: 0}, action){
    switch(action.type){
        case incBonus: 
             return {points: state.points + 1}
        case incByAmount: 
            if(action.payload >= 100)
             return {points: state.points + 1} //here amount - 201 and points 1
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

function getAccountUserFulfilled(value){
    return {type: getAccUserFulfilled, payload: value}
}

function getAccountUserRejected(error){
    return {type: getAccUserRejected, error: error}
}

function getAccountUserPending(value){
    return {type: getAccUserPending}
}

function getUserAccount(id){
    return async (dispatch, getState) =>{
        try {
            dispatch(getAccountUserPending());
            const {data} = await axios.get(`http://localhost:3000/accounts/${id}`);
            dispatch(getAccountUserFulfilled(data.amount));    
        } catch (error) {
            dispatch(getAccountUserRejected(error.message));
        }
    }    
}

function incrementBonus(){
    return {type:incBonus};
} 

setTimeout(() => {
    store.dispatch(getUserAccount(1)); 
    // store.dispatch(incrementByAmount(200)) ////here amount - 201 and points 1
    // store.dispatch(incrementBonus());
}, 2000)


