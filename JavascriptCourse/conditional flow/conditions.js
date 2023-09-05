var z = "hello";
var x = 3 * 4;
var operation = "mul";
// div
//sub

{
  var a = 10;
  var b = 20;
}

//for addition
if (operation == "sum") {
  var c = a + b;
  console.log("sum: " + c);
} else if (operation == "mul") {
  var d = a * b;
  console.log("mul: " + d);
} else if (operation == "") {
} else {
}

switch (operation) {
  case "sum":
    var c = a + b;
    console.log("sum: " + c);
    break;
  case "mul":
    var d = a * b;
    console.log("mul: " + d);
    break;
  default:
    console.log(">>>>>>> de");
}

//For multiplication

// if (operation == "mul") {
//   var d = a * b;
//   console.log("mul: " + d);
// }
