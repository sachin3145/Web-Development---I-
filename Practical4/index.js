console.log("jarvis ready");

// dom elements
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const goToRegisterButton = document.getElementById("go-to-register");
const backToLoginButton = document.getElementById("back-to-login");

function displayRegister(event) {
  event.preventDefault();
  registerForm.style.display = "grid";
  loginForm.style.display = "none";
}

function displayLogin(event) {
  event.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "grid";
}

function validateLogin(e) {
  e.preventDefault();
  console.log("validating login");

  // validating username
  const username = document.querySelector("#username");
  if (
    username.value.length < 6 ||
    username.value.length > 12 ||
    username.value.includes("@")
  )
    username.classList.add("error");
  else username.classList.remove("error");

  // validating password
  const password = document.querySelector("#password");
  if (
    password.value.length < 6 ||
    password.value == password.value.toUpperCase() ||
    password.value == password.value.toLowerCase()
  )
    password.classList.add("error");
  else password.classList.remove("error");
}

function validateRegister(e) {
  e.preventDefault();
  console.log("validating register");

  // validating name
  const name = document.querySelector("#name");
  if (name.value.length == 0 || name.value.length > 50) {
    name.classList.add("error");
  } else name.classList.remove("error");

  // validating enrolment
  const roll = document.querySelector("#roll");
  if (roll.value.length !== 11 || isNaN(Number(roll.value))) {
    roll.classList.add("error");
  } else roll.classList.remove("error");

  // validating email
  const mail = document.querySelector("#mail");
  if (
    mail.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  )
    mail.classList.remove("error");
  else {
    mail.classList.add("error");
  }

  // validating age
  const age = document.querySelector("#age");
  if (isNaN(age.value) || Number(age.value) < 15 || Number(age.value) > 60 ) {
    age.classList.add("error");
  } else age.classList.remove("error");
  
  // validating gender
  const male = document.querySelector("#Male");
  const female = document.querySelector("#Female");
  const notDisclosed = document.querySelector("#not-disclosed");
  const gender = document.querySelector("#gender-box");
  if (male.checked || female.checked || notDisclosed.checked) {
    gender.classList.remove("error");
  }
  else {
    gender.classList.add("error");
  }

  //validating image
  const file = document.querySelector("#file");
  if (!file.files[0] || !file.files[0].type.startsWith('image/'))
    file.classList.add("error");
  else file.classList.remove("error");

}

goToRegisterButton.addEventListener("click", displayRegister);
backToLoginButton.addEventListener("click", displayLogin);
loginForm.addEventListener("submit", validateLogin);
registerForm.addEventListener("submit", validateRegister);
