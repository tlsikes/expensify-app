import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should return action object with provided values', () => {
    const expense = {
        description: 'Rent',
        amount: 102000,
        createdTimestamp: 1000,
        note: 'Last month\'s rent'
    }
    const result = addExpense(expense);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    });
});

test('should return action object with default values', () => {
    const expense = undefined;
    const result = addExpense(expense);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdTimestamp: 0
        }
    });
});

test('should return edit expense action object', () => {
    const result = editExpense('123abc', { note: 'To be or not to be' });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'To be or not to be'
        }
    });
});

test('should return remove expense action object', () => {
    const result = removeExpense({ id: '123abc' });
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

