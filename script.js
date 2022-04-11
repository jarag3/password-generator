// Assignment code here
var generateBtn = document.querySelector("#generate");

    // 1. Prompt the user for the password criteria
    //      a. Password lenght 8 < 128
var passwordLength = window.prompt("Please specify how many characters you'd like.");

var userInput = function() {
  if (userclick) {
    var passwordLength = window.prompt("Please specify how many characters you'd like.");
  }
}


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