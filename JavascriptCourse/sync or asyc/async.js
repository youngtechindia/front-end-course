var a = 10;
var b = 20;

function sum(x, y) {
  return x + y;
}
setTimeout(function () {
  //   console.log(sum(a, b));
}, 5000);

setInterval(function () {
  //   console.log(sum(a, b));
}, 5000);

a = 30;
b = 50;

console.log(sum(a, b));

function print(x) {
  if (x > 0) {
    console.log(x);
    print(x - 1);
  }
}

print(10);
