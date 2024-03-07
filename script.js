const btn = document.querySelector(".btn");
let passwordOne = document.querySelector("#pass1");
let passwordTwo = document.querySelector("#pass2");

//event listner to check that both passport values are equal and if not highlight and message user.

btn.addEventListener("click", (e) => {
  if (passwordOne.value !== passwordTwo.value) {
    e.preventDefault();
    passwordOne.classList.add("error");
    passwordTwo.classList.add("error");
  } else {
    passwordOne.classList.remove("error");
    passwordTwo.classList.remove("error");
  }
});

// event listner to add green tick (non required inputs) to inputs only once there is at least one character entered.

const tel = document.querySelector("#pnumber");
const firstName = document.querySelector("#first-name");
const surname = document.querySelector("#last-name");

function addRequiredClass(item) {
  const span = item.nextElementSibling;
  if (item.value.length > 0 && !span.classList.contains("required")) {
    span.classList.add("required");
  } else if (item.value.length === 0 && span.classList.contains("required")) {
    span.classList.remove("required");
  }
}

tel.addEventListener("input", () => {
  addRequiredClass(tel);
});

firstName.addEventListener("input", () => {
  addRequiredClass(firstName);
});

surname.addEventListener("input", () => {
  addRequiredClass(surname);
});

// const optionalInputs = document.querySelectorAll(".optional");

// [...optionalInputs].forEach(addRequiredClass(item));
