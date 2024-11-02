// Add event listener for the "Back" button
document.getElementById('back').addEventListener('click', function () {
    location.href = 'index.html'; // Redirect to the landing page
});

document.addEventListener("DOMContentLoaded", function () {
    const blogListContainer = document.getElementById("blogListContainer");

    let readLocalStorage = JSON.parse(localStorage.getItem('blogPosts')) || [];

    function renderBlogPosts() {
        blogListContainer.innerHTML = ""; 

        if (readLocalStorage.length === 0) {
     
            const noPostsMessage = document.createElement("p");
            noPostsMessage.textContent = "No blog posts available.";
            blogListContainer.appendChild(noPostsMessage);
        } else {
     
            const ul = document.createElement("ul"); 
            readLocalStorage.forEach(post => {
                const postElement = document.createElement("li");
                postElement.classList.add("blog-post");
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.content}</p>
                    <p><em>Posted by: ${post.username}</em></p>
                `;
                ul.appendChild(postElement);
            });
            blogListContainer.appendChild(ul);
        }
    }

    renderBlogPosts(); 
});