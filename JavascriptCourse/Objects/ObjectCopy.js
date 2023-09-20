var object1 = {
  name: "Raj",
  age: 23,
};

// JSON.stringify  to  convert Object to string

// JSON.parse  to convert String to Object

var object2 = JSON.parse(JSON.stringify(object1));
Object.assign(object2, object1);

object2.name = "Rakesh";

console.log(object2);
console.log(object1);

function sum(a, b, sub) {
  // var a = 2;
  // var b =3;
  // var sub = function (c) {
  //     console.log(c);
  //   };
  var c = a + b;
  sub(c);
}

sum(2, 3, function (c) {
  console.log(c);
});

// var a = 10;
// var b = a;

// b = 20;

// console.log(a);
// console.log(b);
