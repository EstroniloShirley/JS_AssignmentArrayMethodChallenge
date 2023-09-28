const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];
//Solution Challenge1
const youngPeople = people.map((person) => {
  return {
    fullName: person.firstName + ' ' + person.lastName,
    email: person.email,
  };
});
console.log(youngPeople);

//Solution Challenge2
//Chain other method
//filtered all positive then add it
const numbers = [2, -30, 50, 20, -12, -9, 7];
const positiveSum = numbers
  .filter((acc) => acc > 0)
  .reduce((acc, cur) => acc + cur);
console.log(positiveSum);

// Solution Challenge3
//Create a new array called capitalizedWords

const words = ['coder', 'programmer', 'developer'];
const capitalizedWords = words.map((word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const rest = word.slice(1).toLowerCase();

  return firstLetter + rest;
});
console.log(capitalizedWords);
