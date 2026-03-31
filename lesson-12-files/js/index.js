// =============================
// Web APIs Interactive Page
// =============================

// --------------------
// Step 1: Update existing link
// --------------------
const myLink = document.querySelector("a");
// TODO: Change the link text (e.g., "MDN Learning Resources")
// TODO: Change the link URL to the MDN Client-side Web APIs page

// --------------------
// Step 2: Add a new paragraph dynamically
// --------------------
const section = document.querySelector("section");
// TODO: Create a new paragraph element
// TODO: Set its text content
// TODO: Add a class 'highlight'
// TODO: Append it to the section

// --------------------
// Step 3: Prepend text to the first paragraph in section
// --------------------
const firstPara = section.querySelector("p:first-of-type");
// TODO: Create a text node (e.g., "Fun fact: ")
// TODO: Prepend it to firstPara

// --------------------
// Step 4: Button to toggle paragraph styles
// --------------------
const colorButton = document.getElementById("colorButton");
// TODO: Add click event to toggle a 'dynamic' class on all paragraphs

// --------------------
// Step 5: Button to add random fun facts
// --------------------
const addTextButton = document.getElementById("addTextButton");
// TODO: Add click event to create a new paragraph with a random fun fact
// TODO: Add class 'highlight' and append it to the section
// TODO: Save it in an array for resetting later

// --------------------
// Step 6: Button to reset fun facts
// --------------------
const resetButton = document.getElementById("resetButton");
// TODO: Add click event to remove all fun fact paragraphs
// TODO: Clear the array tracking them

// --------------------
// Step 7: Responsive body size
// --------------------
const body = document.body;
function resizeBody() {
  // TODO: Set body width and height to 75% of window.innerWidth/innerHeight
}
window.addEventListener("resize", resizeBody);
resizeBody(); // initial call

// --------------------
// Step 8: Extra interactivity – change background on mouse move
// --------------------
document.addEventListener("mousemove", e => {
  // TODO: Change body background color based on mouse X/Y position
});


// console.log("Browser info:", navigator.userAgent);