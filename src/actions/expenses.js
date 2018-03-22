

import uuid from 'uuid';

// Actions

// ADD_EXPENSE
export const addExpense = (
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
