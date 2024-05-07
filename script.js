const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');
const form = document.getElementById('form');

const checkForPalindrome = (event) => {
  event.preventDefault();

  const inputValue = textInput.value.toLowerCase();

  // regular expression: if it's not(^) within [], then replace it globally with ''
  const cleanInput = inputValue.replace(/[^a-z0-9]/g, '').toLowerCase();

  // error handling
  if (!inputValue) {
    alert('Please input a value');
    return null;
  }

  // success
  else if (reverseResult(cleanInput) === cleanInput) {
    result.innerHTML = `<p><strong>${textInput.value}</strong> is indeed a palindrome! </p>`;
  }

  // all else fails
  else {
    result.innerHTML = `<p><strong>${textInput.value}</strong> is not a palindrome! </p>`;
  }

  // remove hide class
  result.classList.remove('hide');

  // clear input
  resetField(textInput);
};

const reverseResult = (word) => {
  return word.split('').reverse().join('');
};

const resetField = (field) => {
  field.value = '';
};

checkButton.addEventListener('click', checkForPalindrome);
