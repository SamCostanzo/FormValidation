// TEST ONE
const jobRoleSelectList = document.getElementById('title');
const otherInput = document.getElementById('other-title');
const shirtColorList = document.getElementById('color');

// Gives the focus to the first input field when the page is loaded
document.getElementById('name').focus();
// Hides the "other" input feild  
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


// Function by Redmond
function shirtThemeAndColor() {
    let e = document.getElementById('design');
    let selectedValue = e.options[e.selectedIndex].value;

    let jsPuns = document.getElementsByClassName('jsPuns');
    let iHeartJs = document.getElementsByClassName('iHeartJs');

    if ( selectedValue === 'js puns') {
      // console.log('jsPuns');
      toggleDisable(jsPuns, false);
      toggleDisable(iHeartJs, true);
    } else if ( selectedValue === 'heart js') {
      toggleDisable(jsPuns, true);
      toggleDisable(iHeartJs, false);
    } else {
      toggleDisable(jsPuns, false);
      toggleDisable(iHeartJs, false);
    }
  }

  function toggleDisable(element, value) {
    // console.log(element);
    for (var i = 0; i < element.length; i++) {
      element[i].disabled = value;
    }
  }

// Register for Activities. This will use some of the same ideas as the functions above for the shirt
//JSWF stands for Javascript Frameworks workshop and EW for Express workshop
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


// Hides the "color" select menu(the div in this case) 
const colorMenu = document.getElementById('colors-js-puns');
const designSelect = document.getElementById('design');

colorMenu.style.display = 'none';

// Function to show/hide the color menu only show when a T-shirt design is selected
function showHideColorMenu() {
    const selectedValue = designSelect.value;
    if(selectedValue === 'Theme - JS Puns') {
        colorMenu.style.display = 'block';
    } else {
        colorMenu.style.display = 'none';
    }
}




