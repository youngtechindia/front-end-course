var employees = [
  "Rajesh",
  "Ramesh",
  "Rakesh",
  "Rajesh",
  "Ramesh",
  "Rakesh",
  "Rajesh",
  "Ramesh",
  "Rakesh",
  "Rajesh",
  "Ramesh",
  "Rakesh",
  "Rajesh",
  "Ramesh",
  "Rakesh",
  "Rajesh",
  "Ramesh",
  "Rakesh",
  "Rajesh",
  "Ramesh",
  "Rakesh",
];

console.log(employees);

console.log(employees[1]);

console.log(employees[2]);
console.log(employees.length);
var flag = "Rajesh";

for (var index = 0; index < employees.length; index++) {
  if (employees[index] != flag) {
    console.log(employees[index]);
  } else {
    console.log(index + "Rajesh available ");
  }
}
