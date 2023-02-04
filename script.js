const onSubmit = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const passwordInputA = document.querySelector("#password");
const passwordInputB = document.querySelector("#confirm-password");
const noMatchText = document.querySelector(".no-match-text");

var passwordA;
var passwordB = " ";

[...allInputs].forEach((input) => {
  input.addEventListener("focusout", (event) => {
    event.target.classList.add("inputs");
  });
});

onSubmit.addEventListener("submit", (event) => {
  console.log("test");
  if (passwordA !== passwordB) {
    noMatchText.style.display = "block";
    event.preventDefault();
  }
});

passwordInputA.addEventListener("focusout", (event) => {
  passwordA = event.target.value;
});

passwordInputB.addEventListener("focusout", (event) => {
  passwordB = event.target.value;
});
