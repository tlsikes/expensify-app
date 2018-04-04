import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-bigscreen">Expense</div>
            <div className="show-for-bigscreen">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message"><h3>No expenses found</h3></div>
                ) : (
                    props.expenses.map((e) => {
                        return (
                            <ExpenseListItem key={e.id} {...e} />
                        );
                    })
                )
            }
        </div>

    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpenseList);
