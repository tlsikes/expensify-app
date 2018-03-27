import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpenseTotal}</h2>
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
