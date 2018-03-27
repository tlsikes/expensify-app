import moment from 'moment';

// Match on text substring..
const isIncluded = (text, substring) => {
    if (typeof text !== 'string') {
        return false;
    }

    if (typeof substring !== 'string') {
        return true;
    }

    if (text.toLowerCase().includes(substring.toLowerCase())) {
        return true;
    }
    return false;
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((e) => {
        const createdAtMoment = moment(e.createdTimestamp);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = isIncluded(e.description, text); // Note description is a string for sure...fix.
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        } else {
            return a.createdTimestamp < b.createdTimestamp ? 1 : -1;
        }
    });
}

export default getVisibleExpenses;