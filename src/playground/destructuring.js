// Object Destructuring

/*
const person = {
    name: 'Davis',
    age: 27,
    location: {
        city: 'NYC',
        temp: 35
    }
};
// Object destructuring in es6
const { name = 'Anonymous', age } = person;
/!*const name = person.name;
const age = person.age;*!/

// much more readable code
const {city, temp: temperature} = person.location; // temp is being renamed to temperature, destructuring arguments are 1 to 1 with the original object object names
if (city, temperature) {
    console.log(`It's ${temperature} in ${city}`);
}
/!*if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}*!/
console.log(`${name} is ${age}.`);*/

/*
const book = {
    title: 'Egos is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {title, author} = book;
const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);*/

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

//const [street, city, state, zip] = address;
const [, city, state = 'New York', ] = address; // objects in array when destructuring are determined by location or index in array

console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium, ] = item;

console.log(`A medium ${itemName} costs ${medium}`);