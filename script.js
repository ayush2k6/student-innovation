// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add the event listener for hamburger click
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links to show or hide the menu
    navLinks.classList.toggle('active');
});

// Get elements
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');

// Show popup when the button is clicked
openPopupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    popup.classList.add('show');
});

// Close popup when the close button is clicked
closePopupBtn.addEventListener('click', function () {
    popup.classList.remove('show');
});

// Close popup when clicking anywhere outside of the popup
window.addEventListener('click', function (e) {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
});
