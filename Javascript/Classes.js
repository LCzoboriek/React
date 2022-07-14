// Classes are blueprints or objects
// Classes are created with class keyword, and can have propertys, or methods attached to them
// A class is instantiated with the new keyword
// Classes support inheritance, class Person extends Master

// class Human {
//   constructor() {
//     this.gender = "Male";
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }

// class Person extends Human {
//   constructor() {
//     super(); // Executes the parent constructor
//     //executed whenerver you instantiat the class
//     this.name = "Max";
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }
// const person = new Person();
// person.printMyName();

// //Will print out Max
// person.printGender();
//Constructors allow you to add properties to classes/objects, you can still skip the constructor however in ES7
//Demonstrated below
class newHuman {
  gender = "Male";
  printGender = () => {
    console.log(this.gender);
  };
}

class newPerson extends newHuman {
  //executed whenerver you instantiat the class
  name = "Max";
  printMyName = () => {
    console.log(this.name);
  };
}
const person = new newPerson();
person.printGender();
person.printMyName();
