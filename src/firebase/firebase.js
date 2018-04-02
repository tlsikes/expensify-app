import * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// TODO: My use of 'id' in the expense objects is conflicting with the Firebase ID. Keep this in mind.
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const getChildArray = (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             key: child.key,
//             ...child.val()
//         })
//     });
//     return expenses;
// }

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     console.log('array expenses: ', getChildArray(snapshot));
// }, (e) => {
//     console.log('error setting up subscription', e);
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('snapshot: ', snapshot);
//     console.log ('child added: ', snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('snapshot: ', snapshot);
//     console.log ('child changed: ', snapshot.val());
// });

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log ('child removed: ', snapshot);
// });

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     });
//     console.log('array expenses: ', expenses);
// }, (e) => {
//     console.log('error setting up subscription', e);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             });
//         })
//         console.log('array expenses: ', expenses);
//     })
//     .catch ((e) => {
//         console.log('expense get failed', e);
//     })

// const expenses = [{
//     id: '1',
//     description: 'Gum',
//     note: 'Sticky!',
//     amount: 195,
//     createdTimestamp: moment().valueOf()
// },{
//     id: '2',
//     description: 'Rent',
//     note: 'Yikes!',
//     amount: 109500,
//     createdTimestamp: moment().subtract(4, 'days').valueOf()
// },{
//     id: '3',
//     description: 'Credit Card',
//     note: 'Blarg!',
//     amount: 4500,
//     createdTimestamp: moment().subtract(6, 'days').valueOf()
// }]

// expenses.forEach((item) => {
//     database.ref('expenses').push(item);
//     console.log(item);
// });

// database.ref('notes/-L8dAQB0P6_JpY7T2YU9').update({
//     body: 'Go home!'
// });

// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     const name = data.name;
//     const title = data.job.title;
//     const company = data.job.company;
//     console.log(`${name} is a ${title} at ${company}.`);
// }, (e) => {
//     console.log('error setting up subscription', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error setting up subscription', e);
// });

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(42);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log('snapshot: ', val);
//     })
//     .catch((e) => {
//         console.log('db error: ', e);
//     });

// database.ref().set({
//     name: 'Terry Sikes',
//     age: 39,
//     stressLevel: 6,
//     job: {
//         title: "Software Engineer X",
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Ladson',
//         country: 'United States'
//     }    
// }).then(() => {
//     console.log('Data saved!');
// }).catch((e) => {
//     console.log('db init failed!', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazonia',
//     'location/city': 'Seattle'
// })

// database.ref().update({
//     name: 'Robby Sikes',
//     age: 35,
//     isSingle: null,
//     job: 'Physicist',
//     location: {
//         city: 'Sydney',
//         country: 'Australia'
//     }
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data removed');
//     })
//     .catch((e) => {
//         console.log('remove error: ', e);
//     })


// database.ref().set({
//     name: 'Terry Sikes',
//     age: 39,
//     isSingle: false,
//     location: {
//         city: 'Ladson',
//         country: 'United States'
//     }    
// }).then(() => {
//     console.log('Data saved!');
// }).catch((e) => {
//     console.log('db init failed!', e);
// });

// database.ref('age').set(633);
// database.ref('location/city').set('Marsopolis');
// database.ref('location/country').set('Elonia');

// database.ref('attributes').set({
//     height: 1.8,
//     weight: 94
// }).then(() => {
//     console.log('attr set');
// }).catch(() => {
//     console.log('attr fail: ', e);
// });

