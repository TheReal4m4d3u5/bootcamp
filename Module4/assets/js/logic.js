

// Ensure DOM is fully loaded before running the following code
document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle button
    const toggleButton = document.getElementById('toggle');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            // Toggle between light and dark modes
            let mode = localStorage.getItem('mode') || 'light';
            mode = mode === 'dark' ? 'light' : 'dark';
            document.body.classList.toggle('dark', mode === 'dark');
            localStorage.setItem('mode', mode);

            // Update --circle-color based on the mode
            const circleColor = mode === 'dark' ? '#ff4500' : '#ffb100';
            document.documentElement.style.setProperty('--circle-color', circleColor);
        });
    } else {
        console.error("Toggle button not found.");
    }

    // Initialize blog posts in localStorage if not present
    function initializeLocalStorage() {
        if (!localStorage.getItem('blogPosts')) {
            localStorage.setItem('blogPosts', JSON.stringify([]));
        }
    }

    initializeLocalStorage(); // Set up localStorage on page load
});