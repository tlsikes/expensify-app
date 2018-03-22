import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <div>
            <NavLink to="/" activeClassName="current-link" exact={true}>Dashboard</NavLink> &nbsp;&nbsp;
            <NavLink to="/create" activeClassName="current-link">New Expense</NavLink> &nbsp;&nbsp;
            <NavLink to="/help" activeClassName="current-link">Help</NavLink> &nbsp;&nbsp;
            <p />
        </div>
    </header>
)

export default Header;
