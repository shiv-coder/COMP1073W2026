// Base URL for OMDb API
const baseURL = 'https://www.omdbapi.com/';

// STEP 1: Get your API key from http://www.omdbapi.com/apikey.aspx
const key = '';

// DOM elements
const searchTerm = document.querySelector('.search');
const yearInput = document.querySelector('.year');
const searchForm = document.querySelector('form');
const section = document.querySelector('section');

// STEP 2: Add submit event listener


// Function to fetch results
function fetchResults(event) {
    // STEP 3: Prevent default form submission


    // STEP 4: Build the request URL
    

    // STEP 5: Use fetch() to get data and pass to displayResults()
    

}

// Function to display results
function displayResults(json) {

    // STEP 6: Log JSON data
    

    // Clear previous results
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    // STEP 7: Store movies array
    

    if (!movies || movies.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results found.';
        section.appendChild(para);
    } else {
        for (let i = 0; i < movies.length; i++) {

            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const img = document.createElement('img');
            const para = document.createElement('p');

            const current = movies[i];

            // STEP 8: Extract title, year, poster
            

            // STEP 9: Build DOM structure
            

        }
    }
}