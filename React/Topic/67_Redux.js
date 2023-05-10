// In React Native, there is Redux. In Angular/Ionic there is NgRx.

// What is the equivalent for complex state management in Xamarin Forms?

// Singe source of truth
// State is read-only
// Changes are made with pure functions

// Redux is a predictable state container for JavaScript apps. As the application grows, it becomes difficult to keep it organized and maintain data flow. Redux solves this problem by managing application’s state with a single global object called Store. Redux fundamental principles help in maintaining consistency throughout your application, which makes debugging and testing easier.

// A store is an immutable object tree in Redux. A store is a state container which holds the application’s state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.

// import { createStore } from 'redux';
// import reducer from './reducers/reducer'
// const store = createStore(reducer);

// getState: It helps you retrieve the current state of your Redux store.
// store.getState()

// dispatch: It allows you to dispatch an action to change a state in your application.
// store.dispatch({type:'ITEMS_REQUEST'})

// actions are plain JavaScript object that must have a type attribute to indicate the type of action performed. It tells us what had happened. Types should be defined as string constants in your application as given below −
// const ITEMS_REQUEST = 'ITEMS_REQUEST';

// To cause any change in the store, you need to dispatch an action first by using store.dispatch() function. The action object is as follows −

// { type: GET_ORDER_STATUS , payload: {orderId,userId } }
// { type: GET_WISHLIST_ITEMS, payload: userId }

// Actions Creators
// Action creators are the functions that encapsulate the process of creation of an action object. These functions simply return a plain Js object which is an action. It promotes writing clean code and helps to achieve reusability.

// A function is called pure if it abides by the following rules −
// A function returns the same result for same arguments.
// Its evaluation has no side effects, i.e., it does not alter input data.
// No mutation of local & global variables.
// It does not depend on the external state like a global variable.

// Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.

// The following few things should never be performed inside the reducer −
// Mutation of functions arguments
// API calls & routing logic
// Calling non-pure function e.g. Math.random()

// (state,action) => newState

// Middleware
// Redux itself is synchronous, so how the async operations like network request work with Redux? Here middlewares come handy. As discussed earlier, reducers are the place where all the execution logic is written. Reducer has nothing to do with who performs it, how much time it is taking or logging the state of the app before and after the action is dispatched.

// // Redux middleware is a function that sits between the action creators and the reducers in a Redux application. Middleware intercepts every action that is dispatched in the application and can modify or enhance the behavior of those actions before they reach the reducers.
// Middleware functions can be used to implement a variety of features, such as logging, error reporting, asynchronous actions, or other custom behaviors. 

// Commonly, middlewares are used to deal with asynchronous actions in your app. Redux provides with API called applyMiddleware which allows us to use custom middleware as well as Redux middlewares like redux-thunk and redux-promise.

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/index';
// const store = createStore(rootReducer, applyMiddleware(thunk));


// There are two sets of hooks that can be used in place of the connect() higher-order component: useSelector and useDispatch. UseSelector is the alternative to mapStateToProps; it accepts a function parameter that returns the desired portion of the state. 

// UseDispatch is the alternative to mapDispatchToProps; We can use useDispatch and then put the result into the dispatch variable. The dispatch variable can work with all Actions imported from the actions folder.

// https://www.interviewbit.com/redux-interview-questions/
// https://mindmajix.com/redux-interview-questions
// https://www.knowledgehut.com/interview-questions/redux-interview-questions
// https://www.fullstack.cafe/interview-questions/redux
// https://flexiple.com/redux/interview-questions/
// https://www.mindbowser.com/redux-saga-vs-redux-thunk/