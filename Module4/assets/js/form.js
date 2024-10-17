// TODO: Create a variable that selects the form element
const formV = document.querySelector('form');

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submit = document.getElementById('submit');
const errorElement = document.getElementById('error');
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// TODO: Create a function that handles the form submission. 
// Grab the form data and store it in local storage, 
// then redirect to the blog page using the `redirectPage` function. 
// If the form is submitted with missing data, display an error message to the user.

let mode = localStorage.getItem('mode') || "dark";
container.setAttribute('class', mode);
localStorage.setItem('mode', mode);

let blogPosts = [];

function submission(event) {

    // Grab the form data and store it in local storage, 
    // then redirect to the blog page using the `redirectPage` function. 
    // If the form is submitted with missing data, display an error message to the user.

    event.preventDefault();

    const blogPost ={



        storeVars: function() {
            this.username = usernameInput.value;
            this.title = titleInput.value;
            this.content = contentInput.value;
          },
    };


    blogPost.storeVars();

    if (!blogPost.username || !blogPost.title || !blogPost.content) {
        errorElement.textContent = `Please complete the form.`;
        errorElement.style.display = 'block';
    } else {

        let blogPosts = JSON.parse(localStorage.getItem('posts')) || [];
        blog.push(blogPost);
        localStorage.setItem('posts', JSON.stringify(blogPosts));

        myredirectPage();
    }        
}

// then redirect to the blog page using the `redirectPage` function. 

function myredirectPage(){
    window.location.href = "blog.html";
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submit.addEventListener('click', function (event) {
    submission(event);
});





// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background

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