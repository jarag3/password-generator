// Assignment code here
var generateBtn = document.querySelector("#generate");

    // 1. Prompt the user for the password criteria
    //      a. Password lenght 8 < 128
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var lowercaseLetters = alphabet.split('');
let uppercaseLetters = alphabet.toUpperCase();
uppercaseLetters = uppercaseLetters.split('');
var numbers = '123456789'.split('');
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

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
//      b. Lowercase, Uppercase, special characters
var inputCharacters = function() {
  var desiredCharacters = [];
  desiredCharacters[0] = window.confirm("Would you like LOWERCASE CHARACTERS in your password? Select 'Ok' if so, if not then please select 'Cancel'");
  desiredCharacters[1] = window.confirm("Would you like UPPERCASE CHARACTERS in your password? Select 'Ok' if so, if not then please select 'Cancel'");
  desiredCharacters[2] = window.confirm("Would you like NUMBERS in your password? Select 'Ok' if so, if not then please select 'Cancel'");
  desiredCharacters[3] = window.confirm("Would you like SPECIAL CHARACTERS in your password? Select 'Ok' if so, if not then please select 'Cancel'");
  desiredCharacters = JSON.stringify(desiredCharacters);
  localStorage.setItem("desiredCharacters", desiredCharacters);
  
}

    

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