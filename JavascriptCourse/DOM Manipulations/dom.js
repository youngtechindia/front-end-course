console.log(this);

function clickedOnDiv() {
  console.log("Clicked on div");
  var divRef = document.getElementById("main-content");

  console.log(divRef.innerText);

  divRef.innerText = "Clicked on div";
}

function getInputValue() {
  var inputRef = document.getElementById("sampleInput");
  var spanRef = document.getElementById("inputValue");

  var inputRefValue = inputRef.value;

  console.log(inputRefValue);
  spanRef.innerHTML =
    "<strong style='color:red'>" + inputRefValue + "</strong>";
}
