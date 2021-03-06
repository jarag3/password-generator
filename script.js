// Assignment code here
var generateBtn = document.querySelector("#generate");

    // 1. Prompt the user for the password criteria
    //      a. Password lenght 8 < 128
var alphabet = " abcdefghijklmnopqrstuvwxyz"
var lowercaseLetters = alphabet.split('');
var uppercaseLetters = alphabet.toUpperCase();
uppercaseLetters = uppercaseLetters.split('');
var numbers = ' 123456789'.split('');
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

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
  inputPasswordLength();
  inputCharacters();

  desiredCharacters = JSON.parse(desiredCharacters);

  // password generation logic 
  for (var i = 0; i < passwordLength; i++) {
    randomNumArr = [];
    randomNum = Math.random();
    console.log(randomNum)

    if(desiredCharacters[1] && randomNum < 0.25) {
      // generate a random lowercase value and store it in password
    }
    else if(desiredCharacters[2] && randomNum > 0.25 && randomNum < 0.50) {

    } 
    else if(desiredCharacters[3] && randomNum > 0.50 && randomNum < 0.75) {

    }
    else if(desiredCharacters[4] && randomNum > 0.75) {

    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);