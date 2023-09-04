var a = 10;
var b = 20;

// Arithmetic Operators

var sum = a + b;
console.log(sum);

var x = 20;
var y = "30x";

var z = a + b + y + x;

console.log(typeof z);

var sub = a - b - y;

console.log(sub);

var mul = a * y;

console.log(mul);

var div = a / b;

console.log(div);

var remainder = b % a;

console.log(remainder);

//Increment or decrement operators
//a = a + 1;
console.log("a postincrement value inconsole:" + a++);

a++;
console.log("a postincrement value:" + a);

a--;
console.log("a decrement value:" + a); //10

++a;
console.log("a preincrement value:" + a); //11

var temp = ++a; //

console.log(a);

console.log(temp);

//Assignment operators
var k = 5;
var z = 8; //

z += k; //z = z+k
z -= k; // z-k
z *= k; // z*k
console.log(z);

//Comparison operators
a = 20;

var age1 = "22";
var age2 = 22;

var check = age1 == age2;

var check2 = age1 === age2;

console.log("compare a and b:" + check);

console.log("compare a and b:" + check2);
