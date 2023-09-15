//Function expression
var sum = function (a, b) {
  return a + b;
};

console.log(sum(5, 6));

function myFunction(x, cb) {
  //   var x = 3;
  //   var cb = function (y) {
  //     console.log("called");
  //   };

  let y = x * x;

  cb(y);
}

myFunction(3, function (y) {
  console.log("called" + y);
});

///
///
///
