
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved!');
    }, 1500);
});

promise.then((data) => {
    console.log('data: ', data);
    return 'yay!';
}).then((derived) => {
    console.log('again: ', derived);
}).catch((e) => {
    console.log('error: ', e);
});

console.log('end!');

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Rejected!');
//     }, 1500);
// });

// promise2.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log('Ack!');
// })