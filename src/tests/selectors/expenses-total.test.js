import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should handle undefined expense array', () => {
    const total = totalExpenses(undefined);
    expect(total).toBe(0);
})

test('should handle empty expense array', () => {
    const total = totalExpenses([]);
    expect(total).toBe(0);
})

test('should total entire expense array', () => {
    const total = totalExpenses(expenses);
    expect(expenses.length).toBe(3);
    expect(total).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});

test('should total one element expenses array', () => {
    const oneExpense = [
        expenses[1]
    ]
    const total = totalExpenses(oneExpense);
    expect(total).toBe(oneExpense[0].amount);
});

test('should handle undefined expense array', () => {
    const total = totalExpenses(undefined);
    expect(total).toBe(0);
})