import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

    // Use Router intead of BrowserRouter so we have access to history outside of route components.
    const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true} />
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} exact={true} />
                <PrivateRoute path='/create' component={AddExpensePage} />
                <PrivateRoute path='/edit/:id' component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter;