var formContainer = document.getElementById("formContainer");
var idCounter = 1;
function addInput() {
  var inputBox = document.createElement("input");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("id", idCounter);
  idCounter++;
  formContainer.appendChild(inputBox);
  inputBox.addEventListener("blur", function () {
    console.log("onblur");
  });
}

// [

//     {
//         "type":"input",
//         "label":"Name"
//     },
//     {
//         "type":"mobile",
//         "label":"Mobile Number"
//     },
//     {
//         "type":"email",
//         "label":"Email"
//     },
//     {
//         "type":"radio",
//         "label":"Select Gender",
//         "Options":["Male","Female"]
//     }

// ]
