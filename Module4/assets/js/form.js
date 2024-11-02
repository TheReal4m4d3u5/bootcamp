document.addEventListener("DOMContentLoaded", function () {
    // Select the form element by ID to ensure it's accurately targeted
    const formEl = document.querySelector('#blogForm'); // Ensure this targets the correct form by ID

    let redirectURL = 'blog.html';

    // Initialize storeLocalStorage as an array instance
    const storeLocalStorage = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Form submission handler
    const handleFormSubmit = function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form field values
        const usernameEl = document.querySelector('#username').value.trim();
        const titleEl = document.querySelector('#title').value.trim();
        const contentEl = document.querySelector('#content').value.trim();

        // Validate form fields
        if (!usernameEl || !titleEl || !contentEl) {
            const errorEl = document.querySelector('#error');
            errorEl.textContent = 'Please complete the form.';
            setTimeout(() => (errorEl.textContent = ''), 4000); // Clear error message after 4 seconds
            return;
        }
        
        const formData = {
            username: usernameEl,
            title: titleEl,
            content: contentEl,
        };

        // Add new form data to storeLocalStorage array and update localStorage
        storeLocalStorage.push(formData);
        localStorage.setItem('blogPosts', JSON.stringify(storeLocalStorage));

        console.log("Form submitted successfully. Redirecting...");

        // Redirect to the blog page after submission
        location.href = redirectURL;
    };

    
    if (formEl) {
        formEl.addEventListener('submit', handleFormSubmit);
        console.log("Event listener added successfully.");
    } else {
        console.error("Form element not found."); 
    }
});