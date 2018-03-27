import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'non-existent'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const description = 'Newest expense';
    const expense = {
        id: '293023',
        description,
        note: '',
        createdTimestamp: 20932,
        amount: 38229
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const description = 'yeeeehah!';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
        
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(description);
});

test('should not edit an expense if id not found', () => {
    const description = 'yeeeehah!';
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'non-existent',
        updates: {
            description
        }
        
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
