const clickMiButton = document.getElementById('miButton');

clickMiButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'lightpink';
});

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
  document.getElementById('thankYou').style.display = 'block';
});
// Get the hamburger button and navbar
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// When hamburger button is clicked
menuToggle.addEventListener('click', function() {
  // Toggle the 'active' class on the navbar
  navbar.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = navbar.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('active');
  });
});
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', function() {
  navbar.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('#navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navbar.classList.remove('active');
  });
});
