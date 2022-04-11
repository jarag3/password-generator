// Assignment code here
var generateBtn = document.querySelector("#generate");

    // 1. Prompt the user for the password criteria
    //      a. Password lenght 8 < 128


var inputPasswordLength = function() {

  var passwordLength = window.prompt("Please specify how many characters between 8 and 128 for your password length.");
  var decimalCheck = (passwordLength - Math.floor(passwordLength));

  if (passwordLength === null ) {
     window.alert("Invalid response! Please enter a value between 8 and 128.");
     return inputPasswordLength();

  }

  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid response! Please enter a value between 8 and 128.")
    return inputPasswordLength();

  }
     
}
inputPasswordLength();

    //      b. Lowercase, Uppercase, special characters
    // 2. validate the input.
    // 3. Display password to the page. 




// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);