const btn = document.querySelector(".btn");
//event listner to check that both passport values are equal and if not highlight and message user.

btn.addEventListener("click", (e) => {
  const warningMsg = document.querySelector(".warning-msg");
  let passwordOne = document.querySelector("#pass1");
  let passwordTwo = document.querySelector("#pass2");

  if (passwordOne.value !== passwordTwo.value) {
    e.preventDefault();
    passwordOne.classList.add("error");
    passwordTwo.classList.add("error");
    warningMsg.hidden = false;
  } else {
    passwordOne.classList.remove("error");
    passwordTwo.classList.remove("error");
    warningMsg.hidden = true;
  }
});

// event listner to add green tick (non required inputs) to inputs only once there is at least one character entered.

const optionalInputs = document.querySelectorAll(".optional");

[...optionalInputs].forEach(function (item) {
  item.addEventListener("input", () => {
    toggleClass(item);
  });
});

function toggleClass(item) {
  const span = item.nextElementSibling;
  if (item.value.length > 0 && !span.classList.contains("required")) {
    span.classList.add("required");
  } else if (item.value.length === 0 && span.classList.contains("required")) {
    span.classList.remove("required");
  }
}

// Add event listeners to password inputs that only allow css tick boxes if both inputs the same
let passwordOne = document.querySelector("#pass1");
let passwordTwo = document.querySelector("#pass2");

passwordTwo.addEventListener("input", () => {
  toggleClassTwo(passwordTwo);
  toggleClassTwo(passwordOne);
});

passwordOne.addEventListener("input", () => {
  toggleClassTwo(passwordOne);
  toggleClassTwo(passwordTwo);
});

function toggleClassTwo(item) {
  const span = item.nextElementSibling;
  if (
    passwordOne.value === passwordTwo.value &&
    item.value.length > 0 &&
    !span.classList.contains("required")
  ) {
    span.classList.add("required");
    item.classList.remove("error");
  } else {
    span.classList.remove("required");
    item.classList.remove("error");
  }
}
