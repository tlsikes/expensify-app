import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpenseTotal}</span>
                </h2>
                <div className="page-header__actions">
                    <Link className="lg-blue-button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
        ); 
}

const mapStateToProps = (state) => {
    const selectedExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: selectedExpenses.length,
        expensesTotal: totalExpenses(selectedExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);
