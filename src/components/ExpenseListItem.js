import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdTimestamp }) => (
    <Link className="list-item" to={ `/edit/${id}` }>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">
                {moment(createdTimestamp).format('MMMM Do, YYYY')}
            </span>
        </div>
        <h3 className="list-item__amount">{numeral(amount / 100).format('$0,0.00')}</h3>
    </Link>
);

/*
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList);
*/

export default ExpenseListItem;