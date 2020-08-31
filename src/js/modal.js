// Get the modal
var modal = document.getElementById("loginModal");
var modal_2 = document.getElementById("signUpModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span_2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal 
const loginModal = () => {
  modal.style.display = "block";
}
const signUpModal = () => {
  modal_2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
const closeLogin = () => {
  modal.style.display = "none";
}
const closeSignUp = () => {
  modal_2.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
  if (event.target == modal_2) {
    modal_2.style.display = "none";
  }
}