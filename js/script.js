// THIS IS A TEST

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


// Function by the Red Man
function shirtThemeAndColor() {
    let e = document.getElementById('design');
    let selectedValue = e.options[e.selectedIndex].value;

    let jsPuns = document.getElementsByClassName('jsPuns');
    let iHeartJs = document.getElementsByClassName('iHeartJs');

    if ( selectedValue === 'js puns') {
      console.log('jsPuns');
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
    console.log(element);
    for (var i = 0; i < element.length; i++) {
      element[i].disabled = value;
    }
  }















// // Function to show the appropriate colors when a design is selected
// function jsPuns() {
//     // Stores the selected value of the design list
//     const selectedValue = designSelectList.value;
//     // Selects entire design menu
//     const designSelectList = document.getElementById('design');
//     // Flop these two above things around?
//     // These two variables select and store the color options for each shirt design
//     const jsPuns = document.getElementsByClassName('jsPuns');
//     const iHeartJs = document.getElementsByClassName('iHeartJs');



//     // if(selectedValue === 'Theme - JS Puns') {
//     //     shirtColorList.style.display(jsPuns);
//     // } if (selectedValue === 'I &#9829; JS') {
//     //     shirtColorList.style.display(iHeartJs);
//     // } else {
//     //     shirtColorList.style.display(jsPuns + iHeartJs);
    
