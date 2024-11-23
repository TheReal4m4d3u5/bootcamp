//Imports UserLogin, which is an interface defining the structure of the user’s login data (typically includes username and password).
import { UserLogin } from "../interfaces/UserLogin";


// This function attempts to log a user in by:
// Sending a POST request with their credentials.
// Checking if the response is successful.
// Returning a token if successful or handling errors if not.

//Defines the structure of the response we expect from the server after a successful login. This response will include a token string.
// interface LoginResponse { token: string; }

// Defines an asynchronous login function that takes userInfo (an object with username and password) as an argument. 
// This function will attempt to log the user in by making a POST request to the login API.
const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route

  try {

    //Makes a POST request to the /api/auth/login endpoint, sending the user’s login data (userInfo)
    const response = await fetch('/auth/login', {

      //Specifies the HTTP method as POST, which is typically used for sending data securely.
      method: 'POST',
      //Sets the headers to inform the server that we’re sending JSON data.
      headers: { 'Content-Type': 'application/json' },
      //Converts the userInfo object to a JSON string so it can be sent in the body of the request.
      body: JSON.stringify(userInfo),
    });

    //Checks if the response was successful (response.ok is true if the status is 200–299).
    //If not successful, it goes into error-handling mode.
    // if (!response.ok) {
    //   //Parses the error response as JSON so we can read any error message the server sent back.
    //   const errorData = await response.json(); // Parse error response as JSON
    //   //Creates a new error with a detailed message, using the message provided by the server if available.
    //   throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
    // }

    //If the response is successful, we parse it as JSON and expect it to match the LoginResponse structure (an object containing a token).
    const data = await response.json();
    
    //Returns the parsed data (the token), allowing the caller to use this token for authentication
    return data;
  
  } catch (err) {
    console.log('Error from user login: ', err);  // Log any errors that occur during fetch
    return Promise.reject('Could not fetch user info');  // Return a rejected promise with an error message
  }

}

export { login };
