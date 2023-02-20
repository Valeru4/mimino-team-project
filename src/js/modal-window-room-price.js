const modal = document.getElementById('simpleModal');
// All page modals
var modals = document.querySelectorAll('.modal');
// Get open modal button
const modalBtn = document.querySelectorAll('.modal-btn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen 	for OPEN Click
modalBtn.forEach(function(e) {
e.addEventListener('click', openModal);
})
// Listen for CLOSE Click
closeBtn.addEventListener('click', closeModal);
// Listen for OUTSIDE Click
window.addEventListener('click', outsideClick);

// Function to OPEN modal
function openModal() {
  modal.style.display = "block";
}

// Function to CLOSE modal
function closeModal() {
  modal.style.display = "none";
}
// Function to CLOSE modal
function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
}
