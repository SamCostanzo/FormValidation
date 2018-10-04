// PROJECT THREE*****************************************
const jobRoleSelectList = document.getElementById('title');
const otherInput = document.getElementById('other-title');
const shirtColorList = document.getElementById('color');
const nameField = document.getElementById('name');
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


// Running total for activities section. STILL WIP
// const events = document.getElementsByClassName('checkbox');
const costLabel = document.createElement('label');
// Append costLabel to activities
const cost = ''; 
const checkbox = document.querySelectorAll('checkbox');





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
const RegisterButton = document.getElementById('registerButton');
// IDEA-turn the border color of the name input red if left blank
// REMINDER-nameField is already declared at the top


// Function to check for the top nameField being left blank
function validation() {
  if(nameField.value.length == 0) {
  nameField.style.borderColor = 'red';
  nameField.placeholder = 'Please enter your name';
  // Below was the code for adding a label in the HTML. Saved here just incase. Putting error message in placeholder instead.
  // nameError.textContent = 'Please fill this out';
  // nameError.style.color = 'red';
  event.preventDefault();
  nameField.focus();
}
// Same thing as above, but on the email field. Input turns red if left blank
const emailInput = document.getElementById('mail');
if(emailInput.value.length == 0) {
  emailInput.style.borderColor = 'red';
  emailInput.placeholder = 'Please enter your Email';
}

// REMINDER that we are still inside the validation function :)


// TRY THIS! Try warping from here to line 220 in a if statement so it only runs if credit card option is selected.
// const paymentSelect = document.getElementById('x');
const selectedValue = paymentSelect.value;
// IF VALIDATION BREAKS, GET RID OF IF SATEMENT ON LINE BELOW
if(selectedValue == 'credit card'){
// If credit card option is chosen, user must provide a credit card number, zip code, and three digit CVV
// Selecting the three inputs
const creditCardNumberInput = document.getElementById('cc-num');
const zipCodeInput = document.getElementById('zip');
const CvvInput = document.getElementById('cvv');
// Checking for credit card input
if(creditCardNumberInput.value.length == 0){
  creditCardNumberInput.style.borderColor = 'red';
  creditCardNumberInput.placeholder = 'Please enter your credit card number';
};
// Checking for zip code input
if(zipCodeInput.value.length == 0){
  zipCodeInput.style.borderColor = 'red';
  zipCodeInput.placeholder = 'Please fill out';
};
// Checking for CVV input
if(CvvInput.value.length == 0){
  CvvInput.style.borderColor = 'red';
  CvvInput.placeholder = 'Please fill out';
};

// Check that the credit card number is between 13 and 16 digits
// Store users submited credit card number in userCreditCardNumber
const userCreditCardNumber = creditCardNumberInput.value;
if(userCreditCardNumber.length <= 12) {
  creditCardNumberInput.style.borderColor = 'red';
  alert('Your credit card number must be between 13 and 16 digits');
}
if(userCreditCardNumber.length > 16) {
  creditCardNumberInput.style.borderColor = 'red';
  alert('Your credit card number must be between 13 and 16 digits');
}

// Check that the users zip code is exactly 5 digits 
const userZipCode = zipCodeInput.value;
if(userZipCode.length != 5) {
  alert('Your zip code must be 5 digits long');
  zipCodeInput.style.borderColor = 'red';
}

// Checks that the users credit card CVV is exactly 3 digits
const userCvv = CvvInput.value;
if(userCvv.length != 3) {
  alert('Your credit card CVV must be 3 digits long');
  CvvInput.style.borderColor = 'red';
}
}
// Start cut here

// User must select atleast one checkbox in the register for activities section
const allCheckBoxes = document.getElementsByName('choice');
var hasChecked = false;
for(var i = 0; i < allCheckBoxes.length; i++) {
  if(allCheckBoxes[i].checked){
    hasChecked = true;
    break;
  }
}
if(hasChecked == false){
  alert('Please select at least one activity to attend');
  return false;
}
  return true;
}  // END OF VALIDATION FUNCTION




// Function to check if email address formatted correctly. Inspired by Stackoverflow. Function is called in eventlistener below 
function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


// Again, putting the function above into an event listener on the register button at the bottom.
RegisterButton.addEventListener('click', () => {
  validation()
  validateEmail()
});

// IDEA for getting credit card checks working only when credit card option is selected...
// Move that code to a seperate function and call it in a if statement on an event listener on register button.