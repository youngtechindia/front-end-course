function Person(name, age, city) {
  var city;
  this.fullname = name;
  this.age = age;
  this.city = city;
}

var person1 = new Person("Raj", 24);

var person2 = new Person("Ramesh", 25, "Vizag");

console.log(Person("Raj", 24, "Hyd"));
console.log(person1);
console.log(person2);
