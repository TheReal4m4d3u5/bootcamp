// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// if (mode === 'dark') {
//     mode = 'light';
//     container.setAttribute('class', 'light');
//   }
//   else {
//     mode = 'dark';
//     container.setAttribute('class', 'dark');
//   }
  
//   localStorage.setItem('modeLabel', mode);
  


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(){
    let post = localStorage.getItem('posts');

    if(post === null){
    return [];
    }

}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(){


  
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
