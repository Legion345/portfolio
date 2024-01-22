// Nav hamburger-burger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});




// Get the reference to the .bio-title element
const bioTitle = document.querySelector('.bio-title');

// Function to update the font size and padding based on the window size
function adjustBioTitleSize() {
  // Get the width of the window
  const windowWidth = window.innerWidth;
  
  // Calculate the new font size and padding based on the window width
  const fontSize = windowWidth * 0.0977; // Approximately 5.2vw based on 1920px width
  const padding = windowWidth * 0.0167; // Approximately 1vw based on 1920px width
  
  // Update the font size and padding of the .bio-title element
  bioTitle.style.fontSize = `${fontSize}px`;
  bioTitle.style.padding = `${padding}px`;
}

// Call the adjustBioTitleSize function initially
adjustBioTitleSize();

// Call the adjustBioTitleSize function whenever the window is resized
window.addEventListener('resize', adjustBioTitleSize);





// Get the reference to the .bio-text element
const bioText = document.querySelector('.bio-text');

// Function to update the font size and padding based on the window size
function adjustBioTextSize() {
  // Get the width of the window
  const windowWidth = window.innerWidth;
  
  // Calculate the new font size and padding based on the window width
  const fontSize = windowWidth * 0.0182; // Approximately 1vw based on 1920px width
  const padding = windowWidth * 0.0167; // Approximately 1vw based on 1920px width
  
  // Update the font size and padding of the .bio-text element
  bioText.style.fontSize = `${fontSize}px`;
  bioText.style.padding = `${padding}px`;
}

// Call the adjustBioTextSize function initially
adjustBioTextSize();

// Call the adjustBioTextSize function whenever the window is resized
window.addEventListener('resize', adjustBioTextSize);





// Get the reference to the "+" button
const addButton = document.querySelector('.add-btn');
let isBoxVisible = false;

// Attach the click event listener to the "+" button
addButton.addEventListener('click', toggleNewBox);

// Function to toggle the visibility of the new box
function toggleNewBox() {
  const newBox = document.createElement('div');
  const newTitle = document.createElement('h3');
  const addButtonContainer = addButton.parentNode;
  newBox.className = 'details1 new-box hidden'; // Add the "new-box" class with "hidden" class initially
  newTitle.className = 'details1-title';
  newTitle.innerHTML = 'Provide desktop support to end-users, troubleshooting equipment issues, networking challenges, and executing break-fix efforts';

  if (!isBoxVisible) {
    newBox.appendChild(newTitle);
    // Insert a new div element with padding between the newBox and old box
    const paddingDiv = document.createElement('div');
    paddingDiv.style.paddingTop = '20px'; // Adjust the padding value as per your preference
    addButtonContainer.parentNode.insertBefore(paddingDiv, addButtonContainer.nextSibling);
    addButtonContainer.parentNode.insertBefore(newBox, paddingDiv.nextSibling);
    addButton.value = '  - ';
    isBoxVisible = true;
    setTimeout(() => {
      newBox.classList.remove('hidden'); // Remove the "hidden" class to reveal the new box with animation
    }, 100);
  } else {
    addButton.value = ' + ';
    newBox.classList.add('slide-out'); // Add the "slide-out" class to trigger the slide-out animation
    setTimeout(() => {
      addButtonContainer.nextSibling.remove();
      addButtonContainer.nextSibling.remove(); // Remove the padding div
      isBoxVisible = false;
    }, 500);
  }
}

var heroSection = document.getElementById('home');
var skillsSection = document.getElementById('skills-section');
var navbar = document.querySelector("nav");
var isNavbarVisible = true;

window.addEventListener('scroll', function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= heroSection.offsetHeight) {
    navbar.style.position = "sticky";
    navbar.style.top = "0";
    navbar.style.transition = "opacity 0.3s";
    navbar.style.opacity = isNavbarVisible ? "1" : "0";
    navbar.style.animation = isNavbarVisible ? "fadeIn 2s" : "none";
  } else {
    navbar.style.position = "relative";
    navbar.style.opacity = "1";
    navbar.style.animation = "none";
  }

  if (scrollPosition >= skillsSection.offsetTop) {
    isNavbarVisible = false;
  } else {
    isNavbarVisible = true;
  }
});

