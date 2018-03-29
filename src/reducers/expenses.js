

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'EDIT_EXPENSE':
            return state.map((e) => {
                if (e.id === action.id) {
                    return {
                        ...e,
                        ...action.updates
                    }
                } else {
                    return e;
                }
            });

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id != action.id);

        case 'SET_EXPENSES':
            return action.expenses;

        default:
            return state;
    }
};

// Instructor used export default of arrow function directly, not sure how naming works then...
export default expensesReducer;