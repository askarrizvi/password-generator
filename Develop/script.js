// Assignment code here
var lcCharSet = "abcdefghijklmnopqrstuvwxyz";
var ucCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharSet = "0123456789";
var specCharSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

//Define generatePassword function here
function generatePassword() {
  var length = getLength();
  var types = getTypes();
  var genPass = "";

  //For loop that adds a new random character to genPass
  for (i = 0; i <= length; i++) {
    var pickChar = Math.floor((Math.random() * 4));
    //Based on the random variable to pick a type, pick a random character from a type
    //and add it to genPass
    //In the switch statement, check to see if the type is chosen by the user
    //If it's not chosen, decrease i and do the loop again until it finds a type the user chose
    switch (pickChar) {
      case 0:
        if (types[pickChar] === true) {
          genPass += getRand(lcCharSet);
          break;
        } else {
          i--;
          break;
        }
      case 1:
        if (types[pickChar] === true) {
          genPass += getRand(ucCharSet);
          break;
        } else {
          i--;
          break;
        }
      case 2:
        if (types[pickChar] === true) {
          genPass += getRand(numCharSet);
          break;
        } else {
          i--;
          break;
        }
      case 3:
        if (types[pickChar] === true) {
          genPass += getRand(specCharSet);
          break;
        } else {
          i--;
          break;
        }
    }
    /*
    Make sure to break out of loop if genPass has reached the correct length.
    If it hasn't reached the correct length but has reached the end of the
    loop, decrease i to continue the loop.
    I was seeing a bug that was most likely caused by the constant manipulation
    of the i variable in the switch statement.
    */
    if (genPass.length===length){
      break;
    } 
    else if (genPass.length<length&&i===length){
      i--;
    }
  }
  return genPass;
}

//Function to get the length and make sure user entered a valid value
function getLength() {
  var gLength = window.prompt("How long do you want the password to be?(can be between 8 to 128 characters)");
  //Check to see if the value entered is valid
  if (isNaN(gLength) || gLength > 128 || gLength < 8) {
    window.alert("Please enter a valid value");
    gLength = getLength();
  }

  //Remove any leading zeros
  return Number(gLength.toString());
}

//Function to get the different types of characters
function getTypes() {
  var lowerCase = window.confirm("Do you want to include lowercase characters?");
  var upperCase = window.confirm("Do you want to include uppercase characters?");
  var numeric = window.confirm("Do you want to include numeric characters?");
  var specialChars = window.confirm("Do you want to include special characters?");
  //Store all of the answers in an array
  var typesArray = [lowerCase, upperCase, numeric, specialChars];
  //Check to see to make sure that there is atleast one true type
  if (!typesArray.includes(true)) {
    window.alert("You must include atleast one type of character")
    typesArray = getTypes();
  }
  return typesArray;
}

//Get a random character from the provided character set
function getRand(item) {
  var itemLength = item.length;
  randomNum = Math.floor(Math.random() * (itemLength + 1));
  return item.charAt(randomNum);
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
