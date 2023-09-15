var arr = [1, 2, 3];
var person = {
  name: "Raj",
  age: 24,
  address: {
    city: "Bhimavaram",
    state: "Ap",
    zipcode: 534230,
  },
};

console.log(person.name);
var name = "name";
console.log(person[name]);
console.log(person.age);
console.log(person.address.zipcode);
console.log(person["address"]["zipcode"]);

for (var key in person) {
  console.log(key + ":" + person[key]);
}
