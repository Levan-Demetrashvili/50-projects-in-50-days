'use strict';
const checkboxes = [...document.querySelectorAll('.toggle-container input')];

const isAllChecked = () => checkboxes.every(checkbox => checkbox.checked);

checkboxes.forEach((checkbox, i) => {
  checkbox.addEventListener('click', () => {
    if (!isAllChecked()) return;
    checkboxes.at(i - 1).checked = false;
  });
});
