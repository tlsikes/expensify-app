import moment from 'moment';
import {
    setTextFilter,
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate 
} from '../../actions/filters';

test('should return set text filter action', () => {
    const text = 'foo';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should return set text undefined filter action', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should return sort by amount action', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should return sort by date action', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should return set start date action', () => {
    const timestamp = 104023;
    const result = setStartDate(moment(timestamp));
    expect (result).toEqual({
        type: 'SET_START_DATE',
        date: moment(timestamp)
    })
});

test('should return set end date action', () => {
    const timestamp = 28392456;
    const result = setEndDate(moment(timestamp));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        date: moment(timestamp)
    });
});


