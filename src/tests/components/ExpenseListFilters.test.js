import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, popFilters } from '../fixtures/filters';
import moment from 'moment';


let setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter} 
            setStartDate={setStartDate} 
            setEndDate={setEndDate} 
            sortByAmount={sortByAmount} 
            sortByDate={sortByDate} 
        />);
})

test('should provide default ExpenseListFilters render', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should provide populated ExpenseListFilters render', () => {
    wrapper.setProps({
        filters: popFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'marlin';
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    // Change to amount before testing date.
    wrapper.setProps({
        filters: popFilters
    });
    const value = 'date';
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const start = moment();
    const end = start.add(15, 'days');
    wrapper.find('DateRangePicker').simulate('datesChange', {
        startDate: start,
        endDate: end
    });
    expect(setStartDate).toHaveBeenLastCalledWith(start);
    expect(setEndDate).toHaveBeenLastCalledWith(end);
});

test('should handle focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

