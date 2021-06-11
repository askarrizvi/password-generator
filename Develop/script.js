// Assignment code here
//Define generatePassword function here
function generatePassword(){
  var length = getLength();
  var types = getTypes();
}

//Function to get the length and make sure user entered a valid value
function getLength(){
  var gLength = window.prompt("How long do you want the password to be?(can be between 8 to 128 characters)");
  //Check to see if the value entered is valid
  if (isNaN(gLength)||gLength>120||gLength<8){
    window.alert("Please enter a valid value");
    gLength = getLength();
  } 
  return gLength;
}

//Function to get the different types of characters
function getTypes(){
  var lowerCase = window.confirm("Do you want to include lowercase characters?");
  var upperCase = window.confirm("Do you want to include uppercase characters?");
  var numeric = window.confirm("Do you want to include numeric characters?");
  var specialChars = window.confirm("Do you want to include special characters?");
  //Store all of the answers in an array
  var typesArray = [lowerCase, upperCase, numeric, specialChars];
  //Check to see to make sure that there is atleast one true type
  if (!typesArray.includes(true)){
    window.alert("You must include atleast one type of character")
    typesArray = getTypes();
  }
  return typesArray;
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
