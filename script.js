//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('fname');

  // Function to convert input to uppercase
  function convertToUppercase() {
    const value = inputField.value;
    inputField.value = value.toUpperCase();
  }

  // Event listener for input field losing focus
  inputField.addEventListener('blur', convertToUppercase);
});
