const $checkboxContainer = document.querySelector(".checkbox-container");
const $checkIcon = document.querySelector(".checkbox-container__check");
const $checkbox = document.querySelector(".checkbox__save-login--hidden");

$checkboxContainer.addEventListener("click", toggleChecked);

function toggleChecked() {
  $checkIcon.classList.toggle("checkbox-container__check--hidden");

  $checkbox.toggleAttribute("checked");
}
