import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should return action object with provided values', () => {
    const result = addExpense(expenses[2]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// test('should return action object with default values', () => {
//     const expense = undefined;
//     const result = addExpense(expense);
//     expect(result).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             amount: 0,
//             note: '',
//             createdTimestamp: 0
//         }
//     });
// });

// NOTE: These tests don't mock the db...yech. (Resolved by setting up a test db.)
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expense = {
        description: 'Mouse',
        amount: 9899,
        note: 'Logitech!',
        createdTimestamp: 2038023
    }
    store.dispatch(startAddExpense(expense)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done();
    }).catch((e) => {
        console.log('db verify fail: ', e);
    });

    // Use done() to wait for async callback.
    done();;
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expense = {
        description: '',
        amount: 0,
        note: '',
        createdTimestamp: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expense);
        done();
    }).catch((e) => {
        console.log('db verify fail: ', e);
    });

    // Use done() to wait for async callback.
    done();;
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

