
// Object Destructuring

console.log('destructure!');

// const person = {
//     name: undefined, //'Robby',
//     age: 9,
//     location: {
//         city: 'Ladson',
//         temp: 42
//     }
// }

// const name = person.name;
// const age = person.age;

// const {name: userName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${userName} is ${age}.`);

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holliday',
//     publisher: {
//         name: undefined //'Penguin'
//     }
// }

// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName); // If valid publisher, default "Self Published"

//const address = ['111 Southernwood Dr', 'Ladson', 'SC', '29456'];

const address = [];

const [, city = 'Honolulu', state = 'HI'] = address;

console.log(`You are in ${city}, ${state}!`);

const item = ['Coffee (iced)', '$2.75', '$3.50', '$7.00'];

const [description, , mediumPrice] = item

console.log(`Medium ${description}: ${mediumPrice}`);