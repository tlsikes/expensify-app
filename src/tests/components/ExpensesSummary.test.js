import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={52} expensesTotal={8289239202} />);
    expect(wrapper).toMatchSnapshot();
})