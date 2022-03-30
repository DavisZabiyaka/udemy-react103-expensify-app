const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'John Doe',
            age: 9
        });
        //reject('Something went amuck');
        // This would be ignored. Can only have 1 resolve and 1 reject
        //resolve('This is my other resolved data');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');