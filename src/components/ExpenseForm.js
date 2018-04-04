import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// momentjs
// AirBNB react-dates

// const now = moment();
// console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note: '',
            createdTimestamp: props.expense ? moment(props.expense.createdTimestamp) : moment(),
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onAmountChange = (e) => {
        // Note: this does NOT work when passed in as a string, investigate...
        const currencyRegex='/^\d*(\.\d{0,2})?$/';
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdTimestamp) => {
        if (createdTimestamp) {
            this.setState(() => ({ createdTimestamp }));
        }

    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onFocusChange= ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            // Set error
            this.setState(() => ({ error: 'Please provide description and amount.' })) ;
        } else {
            this.setState(() => ({ error: '' })) ;
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdTimestamp: this.state.createdTimestamp.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                { this.state.error && <p className="form__error" color="red">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdTimestamp}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                />
                <textarea
                    className="textarea"
                    placeholder="Note for this expense"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                {/* Wrap button in div it's not a direct child for styling... */}
                <div>
                    <button className="lg-blue-button">Save</button>
                </div>
            </form>
        )
    }
}
