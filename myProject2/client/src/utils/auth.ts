import { JwtPayload, jwtDecode } from 'jwt-decode';



// let inactivityTimeout: NodeJS.Timeout;
// const refreshThreshold = 240000; // 4 minutes in milliseconds

// function resetInactivityTimer() {
//   clearTimeout(inactivityTimeout);
//   inactivityTimeout = setTimeout(() => {
//     alert("You've been inactive. Please log in again.");
//     // Logout the user or request a new token here
//   }, refreshThreshold);
// }

// // Attach to user activity events
// window.addEventListener('mousemove', resetInactivityTimer);
// window.addEventListener('keydown', resetInactivityTimer);

// // Initialize the timer on page load
// resetInactivityTimer();


class AuthService {

  constructor(){
    this.autoLogoutOnTokenExpiry();
  }

  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) return true;
      return decoded.exp * 1000 < Date.now(); 
    } catch (error) {
      return true;
    }
  }

  autoLogoutOnTokenExpiry(){
    const token = this.getToken();
    if(!token) return;

    setInterval(() =>{
      if (this.isTokenExpired(token)){
        this.logout();
      }
      console.log("here");
    }, 5000);
  }


  getToken(): string | null {
    // TODO: return the token
    return localStorage.getItem('token');
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('token', idToken);
    window.location.assign('/'); // Redirect to home page
  }
  

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('token');
    window.location.assign('/login'); 
  }
}

export default new AuthService();
