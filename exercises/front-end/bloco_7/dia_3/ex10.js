const assert = require('assert');

const greetPeople = (people) => people.map((c) => `Hello ${c}`);

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result);
