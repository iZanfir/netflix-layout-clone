const $loginInputs = document.querySelectorAll(".login-container__input");
const $loginLabels = document.querySelectorAll(".login-container__label");

$loginLabels.forEach(label => {
  label.addEventListener("click", addFocus);
});

$loginInputs.forEach(input => {
  input.addEventListener("focusin", toggleFocusClassName);
  input.addEventListener("focusout", toggleFocusClassName);
});

function addFocus(e) {
  $loginInputs.forEach(input => {
    if (e.target.htmlFor === input.name) {
      input.focus();
    }
  });
}

function toggleFocusClassName(e) {
  if (e.target.value.length === 0) {
    $loginLabels.forEach(label => {
      if (label.htmlFor === e.target.name) {
        label.classList.toggle("login-container__label--onFocus");
      }
    });
  }
}
