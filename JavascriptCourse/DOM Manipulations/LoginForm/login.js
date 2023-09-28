function login() {
  var userRef = document.getElementById("username");
  var passwordRef = document.getElementById("password");
  var userError = document.getElementById("userError");
  var passwordError = document.getElementById("passwordError");
  //   console.log(userRef.value);
  //   console.log(passwordRef.value);

  if (userRef.value === "") {
    userError.innerText = "Please enter user name";
  } else {
    userError.innerText = "";
  }
}
