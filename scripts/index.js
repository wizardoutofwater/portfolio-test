console.log('main js loaded');

// Scroll to top button
//Get the button:
let myButton = document.getElementById("topBtn");
let downArrow = document.getElementById("downArrow");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // myButton.style.display = "block";
    myButton.classList.add ('is-visible')
    downArrow.classList.add ('is-not-visible')
  } else {
    // myButton.style.display = "none";
    myButton.classList.remove('is-visible')
    downArrow.classList.remove('is-not-visible')
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}