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


// Navbar sticky to fade in fixed at hero section 
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



// Professional Experience Boxes

const customSelect = document.querySelector(".custom-select");
const selectBtn = document.querySelector(".select-button");

const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".select-dropdown li");

// add click event to select button
selectBtn.addEventListener("click", () => {
  // add/remove active class on the container element
  customSelect.classList.toggle("active");
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

optionsList.forEach((option) => {
  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      customSelect.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      customSelect.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});



// Elastic Custom Cursor

/// Select the circle element
const circleElement = document.querySelector('.circle');

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 } // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) * 4, 150); 
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;

  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
}

// Start the animation loop
tick();

