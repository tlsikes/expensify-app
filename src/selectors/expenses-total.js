
export default (expenses) => {
    const defined = expenses !== undefined;
    if (defined) {
        return expenses.reduce((sum, e) => sum + e.amount, 0);
    } else {
        return 0;
    }
}