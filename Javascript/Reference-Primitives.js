const number = 1;
const num2 = number;
console.log(num2);

const person = {
  name: "Max",
};

// const secondPerson = person;
//Copies the pointer, rather then the object directly

//There is ways to do this in a immuteable way, we use the spread operator

const secondPerson = {
  ...person,
}; // This copies the object directly, rather then copying the pointer, you can do this with as many different properties/values as you want, as its an object
person.name = "Manu";
console.log(secondPerson);
