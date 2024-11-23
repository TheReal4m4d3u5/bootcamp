export default class Validate {

  static isValidUsername(username: string) {
    return username.length >= 8 && /^[a-z]+$/.test(username);
  }

  static isValidPassword(password: string) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) 
  };
}
