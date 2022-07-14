// ... Used to split up array elements or object properties, for example
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);
// Spread operator above

const filter = (...args) => {
  return args.filter((el) => el === 1); // Can use array methods on this as the ... turns it into an array
};
console.log(filter(1, 2, 3));
