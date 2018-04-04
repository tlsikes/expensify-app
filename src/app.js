import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';  // Investigate named imports versus not...
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

/*
const first = moment().startOf('month');

const timestamp = (start, count, units) => {
    return start + moment.duration(count, units);
};

const expenseOne = store.dispatch(
    addExpense({
        key: 'fershluginer', description: 'Mortgage', amount: 100937, createdTimestamp: timestamp(first, 0, 'days') 
    }));

const expenseThree = store.dispatch(
    addExpense({ 
        description: 'Electricity', amount: 2500, createdTimestamp: timestamp(first, 3, 'days') 
    }));

const expenseTwo = store.dispatch(
    addExpense({ 
        description: 'Coffee', amount: 300, createdTimestamp: timestamp(first, 3, 'days') 
    }));

const expenseFour = store.dispatch(
    addExpense({ 
        description: 'Water bill', amount: 6000, createdTimestamp: timestamp(first, 2, 'days') 
    }));

const expenseFive = store.dispatch(
    addExpense({ 
        description: 'Gas bill', amount: 10000, createdTimestamp: timestamp(first, 4, 'days') 
    }));

const expenseSix = store.dispatch(
    addExpense({ 
        description: 'Jewelry', amount: 5000000, createdTimestamp: timestamp(first, 1, 'days') 
    }));

console.log(store.getState());
*/

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('user logged in: ', user);
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        }).catch((e) => {
            console.log('failed to set expenses', e);
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

