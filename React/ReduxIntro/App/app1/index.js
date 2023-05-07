import { createStore } from 'redux';

//store 
const store = createStore(reducer);

//reducer function : input (state, action) : return state
// function reducer(state=initialValue, action){
//     return state;
// }

// Step: 1
// function reducer(state = {amount: 1}, action){
//     return state;
// }

//Step: 2
function reducer(state = {amount: 1}, action){
    if(action.type === 'increment'){
        //Bad update
        // state.amount = state.amount + 1;

        //immutability: 
        //return new object
        return {amount: state.amount + 1}
    }
    return state;
}

//global state
// console.log(store.getState());

//action : not a part of redux, its a conventional
// {type:"increment"}


//global state
// console.log(store.getState());

store.subscribe(() =>{
    console.log(store.getState());
});

setInterval(() => {
    store.dispatch({type:'increment'});
}, 2000)


