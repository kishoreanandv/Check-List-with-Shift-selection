const checkboxes = document.querySelectorAll(
  '.checkBox input[type="checkbox"]'
);
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

let lastChecked;

function handleCheck(e) {
  let inbetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox == this || checkbox == lastChecked) {
        inbetween = !inbetween;
      }
      if (inbetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}
