import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Actions

// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdTimestamp = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdTimestamp
    }
});

// REMOVE_EXPENSE
const removeExpense = (
    {
        id = undefined
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (
    id,
    updates
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

// SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

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

        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {

        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text                
            }

            case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'                
            }

            case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'                
            }

            case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date                
            }

            case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date                
            }

        default:
            return state;
    }
}

// Match on text substring..
const isIncluded = (text, substring) => {
    console.log(`text: ${text}, substring: ${substring}`)
    if (typeof text !== 'string') {
        return false;
    }

    if (typeof substring !== 'string') {
        return true;
    }

    if (text.toLowerCase().includes(substring.toLowerCase())) {
        return true;
    }
    return false;
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((e) => {
        const startDateMatch = typeof startDate !== 'number' || e.createdTimestamp >= startDate;
        const endDateMatch = typeof endDate !== 'number' || e.createdTimestamp <= endDate;
        const textMatch = isIncluded(e.description, text); // Note description is a string for sure...fix.

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } else {
            return a.createdTimestamp < b.createdTimestamp ? -1 : 1;
        }
    });
}

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdTimestamp: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Electricity', amount: 2500, createdTimestamp: 2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdTimestamp: -100 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter('e'));
// store.dispatch(setTextFilter('o'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1001));
store.dispatch(setStartDate());
store.dispatch(setEndDate());
store.dispatch(sortByAmount());

const demoState = {
    expenses: [{
        id: 'randomness',
        description: 'Some expense',
        note: 'Some note on expense',
        amount: 99900, // pennies
        createTimestamp: 0
    }],
    filters: {
        text: 'something', // filter by text match
        sortBy: 'amount', // date or amount
        startDate: undefined, // filter by date range
        endDate: undefined
    }
};

const user = {
    name: 'Rob',
    age: 9
}

console.log({
    ...user,
    location: 'Ladson'
})