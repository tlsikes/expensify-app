import { createStore } from 'redux';

// Action generators - functions that return action objects.

// argument destructure
const add = ({a, b}, c) => {
    return a + b + c;
};

const set = ({ count = 1 }) => ({
    type: 'SET',
    count
});

const reset = () => ({
    type: 'RESET'
});

// Default empty object prevents error when not passed.
const increment = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        // gone!: incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
        incrementBy
});

const decrement = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// Reducers are pure functions
//   - Result determined only by inputs.
//   - No side effects.
// 


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'SET':
            const count = action.count;
            return {
                count: count
            }

        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'RESET':
            return {
                count: 0
            }

        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// unsubscribe here
// unsubscribe()

// increment
// 

store.dispatch(increment( { incrementBy: 5 } ));

// increment
store.dispatch(increment());

// reset
store.dispatch(reset());

// decrement
store.dispatch(decrement());

// decrement
store.dispatch(decrement({ decrementBy: 7 }));

// set
store.dispatch(set({ count: 7 }));

// set
store.dispatch(set({count: 1e6}));

// decrement
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 7
// });

