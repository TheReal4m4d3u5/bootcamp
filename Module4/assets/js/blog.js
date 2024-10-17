// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const textInput = document.querySelector('main');
const clearBtn = document.querySelector('#clear-all');
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
const backButton = document.querySelector('button');

let mode = localStorage.getItem('mode');
container.setAttribute('class', mode);

console.log("mode: " + mode);





// TODO: Create a function that builds an element and appends it to the DOM

function buildElements(){

  const img = document.createElement('img');
  document.appendChild(currentElement);

}

// TODO: Create a function that handles the case where there are no blog posts to display

function noBlogPosts() {



}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. 
// If not, call the no posts function.

function renderBlogList(){




}



// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked




// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background

  console.log("mode: " + mode);

  if (mode === 'dark') {
    mode = 'light';
    console.log("mode: " + mode);
    container.setAttribute('class', 'light');
    localStorage.setItem('mode', mode);
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    localStorage.setItem('mode', mode);
    console.log("mode: " + mode);
  }
});




backButton.addEventListener('click', function () {
  window.location.href = "index.html";
});