// JavaScript for interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Show alert when 'Learn More' button is clicked
    const learnMoreButton = document.querySelector('.hero button');
    learnMoreButton.addEventListener('click', function() {
        alert('Thank you for your interest! We are dedicated to providing the best healthcare services.');
    });

    // Dropdown menu functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseover', function() {
        dropdownMenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        dropdownMenu.style.display = 'none';
    });

    // Simple login alert
    const loginLink = document.querySelector('.login a');
    loginLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Login functionality coming soon!');
    });
});
