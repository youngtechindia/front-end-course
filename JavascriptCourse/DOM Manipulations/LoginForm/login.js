var userRef = document.getElementById("username");
var passwordRef = document.getElementById("password");
var userError = document.getElementById("userError");
var passwordError = document.getElementById("passwordError");
var loginBtn = document.getElementById("loginBtn");
function login() {
  console.log(userRef.value);
  console.log(passwordRef.value);

  //   userRef.value = "";
  //   passwordRef.value = "";

  if (userRef.value === "") {
    userError.innerText = "Please enter user name";
  } else if (userRef.value.length < 4) {
    userError.innerText = "Please enter atlease  3 characters";
  } else {
    userError.innerText = "";
  }
  if (userRef.value === "") {
    userError.innerText = "Please enter user name";
  } else {
    userError.innerText = "";
  }
}

function validateLogin() {
  console.log(userRef.value);
  console.log(passwordRef.value);
  if (userRef.value.length > 3 && passwordRef.value !== "") {
    loginBtn.removeAttribute("disabled");
  } else {
    loginBtn.setAttribute("disabled", true);
  }
}
