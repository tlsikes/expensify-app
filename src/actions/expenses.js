

import uuid from 'uuid';
import database from '../firebase/firebase';

const getUID = (state) => {
    return state.auth.uid;
}

export const expenseDbRoot = (uid) => {
    return `users/${uid}/expenses`;
}

// Actions

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdTimestamp = 0
        } = expenseData;
        const expense = { description, note, amount, createdTimestamp };
        const uid = getState().auth.uid;
        return database.ref(expenseDbRoot(uid)).push(expense).then((ref) => {
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

export const startRemoveExpense = ({ id} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(expenseDbRoot(uid)).child(id).remove().then(() => {
            // Dispatch the action for redux
            dispatch(removeExpense({
                id
            }));
        }).catch((e) => {
            console.log('remove failed: ', e);
        });
    }
};

// EDIT_EXPENSE
export const editExpense = (
    id,
    updates
) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        console.log('id: ', id);
        console.log('editing: ', updates);
        const uid = getState().auth.uid;
        return database.ref(expenseDbRoot(uid) + '/' + id).update(updates).then(() => {
            // Dispatch the action for redux
            dispatch(editExpense(id, updates));
        });
    }
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        // This return is to return promise for second "then"...
        const uid = getState().auth.uid;
        return database.ref(expenseDbRoot(uid))
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

