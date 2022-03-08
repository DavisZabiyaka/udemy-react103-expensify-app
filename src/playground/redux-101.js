import { createStore } from 'redux';

/*
const add = ({a, b}, c) => {
    return a + b + c;
};

console.log(add({ a: 1, b: 12}, 100));
*/

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
})

// Reducers - the function we pass to create a store
// 1. Reducers are pure function (output is only determined by input)
// 2. Never change state or action

// example of not-pure function
/*let a = 10;
const add = (b) => {
    return a + b;
}*/
// Example of Pure function
/*
const add = ({a, b}, c) => {
    return a + b + c;
};
*/
// Another example of not pure function
/*let result;
const add = (a, b) => {
    result = a + b;
}*/ // Its interacting with var outside of its scope
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET': {
            return {
                count: action.count
            }
        }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
}

const store = createStore(countReducer);

// watch for changes in state in the store
const unsubscribe  = store.subscribe(() => {
    console.log(store.getState());
})

// Action is an object that gets sent to the store
// increment, decrement, reset
/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});*/
store.dispatch(incrementCount( { incrementBy: 5}));

//unsubscribe();

store.dispatch(incrementCount());

/*store.dispatch({
    type: 'RESET'
});*/
store.dispatch(resetCount());

/*store.dispatch({
    type: 'DECREMENT',
    decrementBy: 1
});*/
store.dispatch(decrementCount({}));

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101 }));