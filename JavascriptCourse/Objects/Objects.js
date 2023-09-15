var arr = [1, 2, 3];

// this
var firstName = "xyz";

console.log(this);

var fsnames = {};
var person = {
  firstName: "Raj",
  lastName: "krish",
  age: 24,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  address: {
    city: "Bhimavaram",
    state: "Ap",
    zipcode: 534230,
  },
};

console.log("123***" + person.fullName());

person.firstName = "Ram";

console.log("456***" + person.fullName());
console.log(person);

// function fullName(obj) {
//   return obj.firstName + " " + obj.lastName;
// }

// console.log("***" + fullName(person));

console.log(person.name);
var name = "name";
console.log(person[name]);
console.log(person.age);
console.log(person.address.zipcode);
console.log(person["address"]["zipcode"]);

for (var key in person) {
  console.log(key + ":" + person[key]);
}

var student1 = {
  name: "Ram",
  class: "7Th",
  section: "B",
  school: "abc school",
  rollnumber: 1,
};

var student2 = {
  name: "Raj",
  class: "7Th",
  section: "A",
  school: "abc school",
  rollnumber: 1,
};

var students = [
  {
    name: "Ram",
    class: "7Th",
    section: "B",
    school: "abc school",
    rollnumber: 1,
  },
  {
    name: "Raj",
    class: "7Th",
    section: "A",
    school: "abc school",
    rollnumber: 2,
  },
];

console.log(students[1].rollnumber);
