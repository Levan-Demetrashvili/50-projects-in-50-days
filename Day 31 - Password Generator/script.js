const result = document.getElementById('result');
const copyBtn = document.getElementById('copy');
const generateBtn = document.getElementById('generate');

const lengthEl = document.getElementById('length');
const hasUppercase = document.getElementById('uppercase');
const hasLowercase = document.getElementById('lowercase');
const hasNumbers = document.getElementById('numbers');
const hasSymbols = document.getElementById('symbols');

function randomLowerCaseLetter() {
  return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function randomUpperCaseLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function randomDigit() {
  return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomPassword() {
  const chechListItems = [hasLowercase, hasUppercase, hasNumbers, hasSymbols];
  const randoms = [randomLowerCaseLetter, randomUpperCaseLetter, randomDigit, randomSymbol];

  chechListItems.forEach((item, i) => !item.checked && delete randoms[i]);
  const filteredRandoms = randoms.filter(el => el !== '');

  if (filteredRandoms.length === 0) {
    result.textContent = '';
    return '';
  }

  let password = '';
  for (let i = 0; i < +lengthEl.value; i++) {
    password += filteredRandoms[i % filteredRandoms.length]();
  }
  result.textContent = password;
}

generateBtn.addEventListener('click', randomPassword);
copyBtn.addEventListener('click', function () {
  if (!result.textContent) return;

  navigator.clipboard.writeText(result.textContent);
  alert(`Password copied to clipboard!`);
});
