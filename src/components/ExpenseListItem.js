import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdTimestamp }) => (
    <div>
        <span>
            <Link to={ `/edit/${id}` }>
                {description}
            </Link>
            &nbsp;
        </span>
        <span>{amount}&nbsp;</span>
        <span>{createdTimestamp}&nbsp;</span>
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