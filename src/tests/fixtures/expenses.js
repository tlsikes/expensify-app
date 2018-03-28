import moment from 'moment';

// TODO: Fix up key/id thing, artifact from Firebase transition.
export default [{
    key: '1',
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdTimestamp: 0
},{
    key: '2',
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdTimestamp: moment(0).subtract(4, 'days').valueOf()
},{
    key: '3',
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdTimestamp: moment(0).add(4, 'days').valueOf()
}]
