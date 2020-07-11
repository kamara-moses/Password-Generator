// Arrays
var passwordLength;
var Uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var Lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var Symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];

// Defined Variables
var passwordLength;
var confirmUppercase;
var confrimLowercase;
var confirmNumbers;
var confirmSymbols;

// starts the password generator and ask for the users input
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', writePassword);


// worked with my tutor and someone from learning assitance to confirm users prompts
function generatePassword() {

    passwordLength = prompt('How many characters do you want your password to be? choose between 8-128 characters');

    if (passwordLength < 8 || passwordLength > 128) {
        alert('password must be between 8-128 characters');
        passwordLength = prompt('How many characters do you want your password to be? choose between 8-128 characters');
    }
    // alert that let the user knows that the length they chose meet the criteria
    alert('the password length you have chosen meet the password generator criteria');

    var confirmUppercase = confirm('do you want uppercase included in your password?');
    var confrimLowercase = confirm('do you want lowercase included in your password?');
    var confirmNumbers = confirm('do you want numbers included in your password?');
    var confirmSymbols = confirm('do you want symbols included in your password?');

var passwordChars = [];

if (confirmUppercase) {
    passwordChars = passwordChars.concat(Uppercase)
}
if (confrimLowercase) {
    passwordChars = passwordChars.concat(Lowercase)
}
if (confirmNumbers) {
    passwordChars = passwordChars.concat(Numbers)
}
if (confirmSymbols) {
    passwordChars = passwordChars.concat(Symbols)
}

var text = '';

for (var i = 0; i < passwordLength; i++) {
    text += passwordChars[(Math.floor(Math.random() * passwordChars.length))];
}
  console.log(text, 'randomized password')
    return text;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// create conditionals that checks if the password is 8-128 characters
// create a function that randomly selects characters from the users inputs
// create a variable that stores the password (string or array)
// write password out to the webpage, hint manipulating the DOM

// get the password length from the user
// confirm if the user wants uppercase, lowercase, numbers, special characters
// convert the password length to number and check IF the length is greater than 8 and less than 128
// if the length is fine, create an `acceptableCharacters` array and set to []
// add the confirmed array all the approved characters (lowercase/uppercase/numbers/special)
// loop to the approved password length and choose a random array index and place in string that will be the password
// print password in the result box