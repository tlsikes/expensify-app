import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ dispatch, id, description, amount, createdTimestamp }) => (
    <div>
        <span>
            <strong>
            <Link to={ `/edit/${id}` }>
                {description}
            </Link>
            </strong>
            &nbsp;&nbsp;
        </span>
        <span>
            {numeral(amount / 100).format('$0,0.00')}&nbsp;&nbsp;
        </span>
        <span>
            {moment(createdTimestamp).format('MMMM Do, YYYY')}&nbsp;&nbsp;
        </span>
    </div>
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