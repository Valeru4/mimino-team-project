const modalt = document.getElementById('simpleModalt');
// All page modals
var modalst = document.querySelectorAll('.modalt');
// Get open modal button
const modalBtnt = document.querySelectorAll('.modal-btnt');
// Get close button
const closeBtnt = document.getElementsByClassName('closeBtnt')[0];

// Listen 	for OPEN Click
modalBtnt.forEach(function(e) {
e.addEventListener('click', openModal);
})
// Listen for CLOSE Click
closeBtnt.addEventListener('click', closeModal);
// Listen for OUTSIDE Click
window.addEventListener('click', outsideClick);

// Function to OPEN modal
function openModal() {
  modalt.style.display = "block";
}

// Function to CLOSE modal
function closeModal() {
  modalt.style.display = "none";
}
// Function to CLOSE modal
function outsideClick(e) {
  if(e.target == modalt) {
    modalt.style.display = "none";
  }
}
