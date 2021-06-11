// Assignment code here
//Define generatePassword function here
function generatePassword(){
  var length = getLength();
  //var lowerCase = window.
  return length;
}

//Function to get the length and make sure user entered a valid value
function getLength(){
  var gLength = window.prompt("How long do you want the password to be?(can be between 8 to 128 characters)");
  debugger;
  if (isNaN(gLength)||gLength>120||gLength<8){
    window.alert("Please enter a valid value");
    gLength = getLength();
  } 
  return gLength;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
