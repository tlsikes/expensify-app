

import uuid from 'uuid';
import database from '../firebase/firebase';

// Actions

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdTimestamp = 0
        } = expenseData;
        const expense = { description, note, amount, createdTimestamp };

        return database.ref('expenses').push(expense).then((ref) => {
            // Dispatch the action for redux
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
};

// REMOVE_EXPENSE
export const removeExpense = (
    {
        id = undefined
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (
    id,
    updates
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {

        return database.ref('expenses')
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((child) => {
                    expenses.push({
                        id: child.key,
                        ...child.val()
                    });
                })
            dispatch(setExpenses(expenses));
        }).catch ((e) => {
            console.log('expense get failed', e);
        });
    }
};

