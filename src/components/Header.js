import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/dashboard" activeClassName="current-link" exact={true}>Dashboard</NavLink> &nbsp;&nbsp;
            <NavLink to="/create" activeClassName="current-link">New Expense</NavLink> &nbsp;&nbsp;
            <NavLink to="/help" activeClassName="current-link">Help</NavLink> &nbsp;&nbsp;
            <button onClick={startLogout}>Logout</button>
            <p />
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
