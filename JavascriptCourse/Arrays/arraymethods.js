var myArray = ["hello", "abc", "xyz"];

console.log(typeof myArray);
console.log(myArray);
myArray.push("123");
console.log(myArray);
myArray.pop();
myArray.pop();
console.log(myArray);

console.log(myArray.indexOf("hello"));

console.log(myArray.reverse());

console.log(myArray.reverse());

var numbers = [33, 44, 11, 12, 23];

console.log(numbers.sort().reverse());
console.log(numbers.shift());
console.log(numbers.unshift(66));

// [66, 33, 23, 12, 11]

console.log(numbers.slice(2, 5));
console.log(numbers);

// numbers.splice(4, 1, 13, 14, 15);

numbers.splice(3, 2);

//splice(startIndex,deletecount,elements to be inserted)

console.log(numbers);
