

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
            // Dispatch the actin for redux
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
