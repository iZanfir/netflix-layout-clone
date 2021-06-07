const $checkboxContainer = document.querySelector(".checkbox-container");
const $checkIcon = document.querySelector(".checkbox-container__check");
const $checkbox = document.querySelector(".checkbox__save-login--hidden");

$checkboxContainer.addEventListener("click", toggleChecked);

function toggleChecked() {
  $checkIcon.classList.toggle("hidden");

  const value = $checkbox.getAttribute("value");

  if (value === "false") {
    $checkbox.setAttribute("value", true);
  } else {
    $checkbox.setAttribute("value", false);
  }
}
