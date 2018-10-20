// PROJECT THREE*****************************************
const jobRoleSelectList = document.getElementById('title');
const otherInput = document.getElementById('other-title');
const shirtColorList = document.getElementById('color');
const nameField = document.getElementById('name');
const creditCardNumberInput = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const CvvInput = document.getElementById('cvv');
// Gives the focus to the first input field when the page is loaded
nameField.focus();
// Hides the "other" input feild so we can choose when to display it. 
otherInput.style.display = 'none';

// Function to show/hide the "other job role" input field-only show when selected
function showHideOtherInput() {
    const selectedValue = jobRoleSelectList.value;
    if(selectedValue === 'other') {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
    }
}

// T-SHIRT INFO***********************************************
// Function to display the correct options when a shirt is selected. Thanks Redmond! :)
function shirtThemeAndColor() {
    let e = document.getElementById('design');
    let selectedValue = e.options[e.selectedIndex].value;
    let pleaseSelectTshirt = document.getElementById('pleaseSelectTshirt');
    let jsPuns = document.getElementsByClassName('jsPuns');
    let iHeartJs = document.getElementsByClassName('iHeartJs');

    if ( selectedValue === 'js puns') {
      toggleDisable(jsPuns, false);
      toggleDisable(iHeartJs, true);
      pleaseSelectTshirt.setAttribute('disabled', true);
    } else if ( selectedValue === 'heart js') {
      toggleDisable(jsPuns, true);
      toggleDisable(iHeartJs, false);
      pleaseSelectTshirt.setAttribute('disabled', true);
    } else {
      toggleDisable(jsPuns, false);
      toggleDisable(iHeartJs, false);
    }
  }
// This funciton disables elements on the select menu
  function toggleDisable(element, value) {
    // console.log(element);
    for (var i = 0; i < element.length; i++) {
      element[i].disabled = value;
    }
  }

const colorMenu = document.getElementById('colors-js-puns');
const designSelect = document.getElementById('design');
// Hides the "color" select menu(the div in this case) So we can choose when to display it later 
colorMenu.style.display = 'none';

// Function to show/hide the color menu only show when a T-shirt design is selected
function showHideColorMenu() {
    const heart = document.getElementById('heart');
    const puns = document.getElementById('puns');
    const selectTheme = document.getElementById('selectTheme');
    const selectedValue = designSelect.value;
    if(selectedValue === puns, heart) {
        colorMenu.style.display = 'block';
        selectTheme.setAttribute('disabled', true);
    } else {
        colorMenu.style.display = 'none';
    }
}
// Adding the function into an event listener for a change on the design select menu
designSelect.addEventListener('change', () => {
  showHideColorMenu()
});


// REGISTER FOR ACTIVITIES****************************************
// JSFW stands for Javascript Frameworks workshop and EW for Express workshop
// Disables EW if JSFW is checked and vice versa...because they are at the same time.
const JSFW = document.getElementById('JSFW');
const EW = document.getElementById('EW');

JSFW.addEventListener('change', () => {
if(JSFW.checked){
    EW.setAttribute('disabled', true);
} else {
    EW.removeAttribute('disabled');
  }
});

EW.addEventListener('change', () => {
if(EW.checked){
  JSFW.setAttribute('disabled', true);
} else {
  JSFW.removeAttribute('disabled');
  }
});

// Same thing as above, but for the JS libraries workshop and the Node.js workshop
const JSLW = document.getElementById('JSLW');
const NODEWS = document.getElementById('NODEWS');

JSLW.addEventListener('change', () => {
if(JSLW.checked){
  NODEWS.setAttribute('disabled', true);
} else {
  NODEWS.removeAttribute('disabled');
  }
});

NODEWS.addEventListener('change', () => {
if(NODEWS.checked){
  JSLW.setAttribute('disabled', true);
} else {
  JSLW.removeAttribute('disabled');
  }
});


// Running total for activities section. Called in HTML
function checkTotal() {
  document.listForm.total.value = '';
  var sum = 0;
  for (i=0;i<document.listForm.choice.length;i++) {
    if (document.listForm.choice[i].checked) {
      sum = sum + parseInt(document.listForm.choice[i].value);
    }
  }
  document.listForm.total.value = sum;
}


// Payment Info******************************************
const paymentSelect = document.getElementById('payment');
const creditCardDiv = document.getElementById('credit-card');
const payPalInfo = document.getElementById('payPalInfo');
const bitcoinInfo = document.getElementById('bitcoinInfo');
// Disables the top option for 'Select Payment Method'
const selectPaymentMethod = document.getElementById('selectPaymentMethod');
selectPaymentMethod.setAttribute('disabled', true);

// Hide the two divs first for paypal and bitcoin so we can display them only when the right option is selected
payPalInfo.style.display = 'none';
bitcoinInfo.style.display = 'none';
// Function to show/hide the correct information when different payment methods are selected
function showHidePaymentInfo() {
const selectedValue = paymentSelect.value;
if(selectedValue === 'credit card') {
  creditCardDiv.style.display = 'block';
  payPalInfo.style.display = 'none';
  bitcoinInfo.style.display = 'none';
} else if(selectedValue === 'paypal') {
  payPalInfo.style.display = 'block';
  bitcoinInfo.style.display = 'none';
  creditCardDiv.style.display = 'none';
} else if(selectedValue === 'bitcoin') {
  bitcoinInfo.style.display = 'block';
  payPalInfo.style.display = 'none';
  creditCardDiv.style.display = 'none';
  }
}
// Put the above function in an event listener on the select menu
paymentSelect.addEventListener('change', () => {
  showHidePaymentInfo()
});






// FORM VALIDATION************************************
// Each function checks for a specific part of the form. All functions are called at the bottom in the submit event handeler
const RegisterButton = document.getElementById('registerButton');

function validationNameField() {
  if(nameField.value.length == 0) {
  nameField.style.borderColor = 'red';
  nameField.placeholder = 'Please enter your name';
  nameField.focus();
  event.preventDefault();
} else {
  return true;
  }
}

// Check for email input
function validationEmailField(){
const emailInput = document.getElementById('mail');
if(emailInput.value.length == 0) {
  emailInput.style.borderColor = 'red';
  emailInput.placeholder = 'Please enter your Email';
  event.preventDefault();
} else {
  return true;
  }
}

// To check if credit card input left blank
function validationCCnumber(){
if(creditCardNumberInput.value.length == 0){
  creditCardNumberInput.style.borderColor = 'red';
  creditCardNumberInput.placeholder = 'Please enter your credit card number';
  console.log('Enter your credit card number');
  event.preventDefault();
} else {
  return true;
  }
}

// Checking for zip code input
function validationZipCode(){
if(zipCodeInput.value.length == 0){
  zipCodeInput.style.borderColor = 'red';
  zipCodeInput.placeholder = 'Please fill out';
  event.preventDefault();
} else {
  return true;
  }
}

// Checking for CVV input
function validationCVV(){
if(CvvInput.value.length == 0){
  CvvInput.style.borderColor = 'red';
  CvvInput.placeholder = 'Please fill out';
  console.log('Please enter your CVV number');
  
  event.preventDefault();
} else {
  return true;
  }
}

// Check that the credit card number is between 13 and 16 digits
function validationCreditCardCorrectDigits(){
const userCreditCardNumber = creditCardNumberInput.value;
if(userCreditCardNumber.length <= 12) {
  creditCardNumberInput.style.borderColor = 'red';
  alert('Credit card number must be at least 13 digits long, and no longer than 16');
  event.preventDefault();
}
else if(userCreditCardNumber.length > 16) {
  creditCardNumberInput.style.borderColor = 'red';
  alert('Credit card number must be at least 13 digits long, and no longer than 16');
  event.preventDefault();
} else {
  return true;
  }
}

// Check that the users zip code is exactly 5 digits 
function validationZipCodeCorrectDigits(){
const userZipCode = zipCodeInput.value;
if(userZipCode.length != 5) {
  zipCodeInput.style.borderColor = 'red';
  alert('Your zip code must be exactly 5 digits long');
  event.preventDefault();
} else {
  return true;
  }
}

// Check if CVV number is exactly 3 digits
function validationCvvCorectDigits(){
const userCvv = CvvInput.value;
if(userCvv.length != 3) {
  CvvInput.style.borderColor = 'red';
  event.preventDefault();
  alert('Your CVV must be 3 exactly digits long');
} else {
  return true;
  }
}


// User must select atleast one checkbox in the register for activities section
function validationAtleastOneCheckboxChecked(){
const allCheckBoxes = document.getElementsByName('choice');
var hasChecked = false;
for(var i = 0; i < allCheckBoxes.length; i++) {
  if(allCheckBoxes[i].checked){
    hasChecked = true;
    break;
  }
}
if(hasChecked == false){
  event.preventDefault();
  alert('You must register for at least one event');
} else{
  return true;
  }
}

// Function to check if email address formatted correctly. Inspired by Stackoverflow. 
function validationEmailFormatedCorrectly(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

// FINALLY!!!
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  validationNameField()
  validationEmailField()
  validationEmailFormatedCorrectly()
  validationAtleastOneCheckboxChecked()
  
// Credit card related functions are called here, so they are only ran when the credit card option is selected
  const selectedValue = paymentSelect.value;
  if(selectedValue == 'credit card'){
    validationCCnumber()
    validationZipCode()
    validationCVV()
    validationCreditCardCorrectDigits()
    validationZipCodeCorrectDigits()
    validationCvvCorectDigits()
  }
});

 
  