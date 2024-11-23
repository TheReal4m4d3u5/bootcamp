// Constructor Validate is imported.
import Validate from '../validate.js';



describe('Validate', () => {

  describe('Username Length', () => {
    it('should return false for username less than 8 characters', () => {
      // TODO: Write a test that checks if isValidUsername() returns false when the username is less than 8 characters.

      //Arrange
      const validator = new Validate();
      const badUsername = "bad";
      //Act 
      const result = Validate.isValidUsername(badUsername);

      //Assert
      expect(Validate.isValidUsername('short')).toBe(false);
    });
  });

  describe('Username all lower case', () => {
    it('should return false for username not containing all lower case characters', () => {
      // TODO: Write a test that checks if isValidUsername() returns false when the username is not all lowercase characters.

      //Arrange
      const validator = new Validate();
      const badUsername = "bad";
      //Act 
      const result = Validate.isValidUsername(badUsername);

      //Assert
      expect(Validate.isValidUsername('short')).toBe(false);




      // expect(Validate.isValidUsername('UserName')).toBe(false);
      // expect(Validate.isValidUsername('USERNAME')).toBe(false);
      // expect(Validate.isValidUsername('user123')).toBe(false);

    });
  });

  describe('Username valid', () => {
    it('should return true for all lower case username at least 8 characters long', () => {
      // TODO: Write a test that checks if isValidUsername() returns true when the username is at least 8 characters
      // long and contains all lowercase characters.
      expect(Validate.isValidUsername('validname')).toBe(true);
      expect(Validate.isValidUsername('alllower')).toBe(true);
    });
  });

  describe('Password Length', () => {
    it('should return false for password less than 8 characters long', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password is less than 8 characters.

      //Arrage
      const validator = new Validate();
      const invalidPass = "b1";
      //act 
      const result = Validate.isValidUsername(invalidPass);
      //assert
      expect(Validate.isValidPassword('Short1')).toBe(false);

    });
  });

  describe('Password Uppercase', () => {
    it('should return false if the password does not contain at least 1 uppercase character', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password does not contain at least 1 uppercase character.
      expect(Validate.isValidPassword('lowercase1')).toBe(false);
      expect(Validate.isValidPassword('alllowercase')).toBe(false);
    });
  });

  describe('Password Lowercase', () => {
    it('should return false if the password does not contain at least 1 lowercase character', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password does not contain at least 1 lowercase character.
      expect(Validate.isValidPassword('ALLUPPER1')).toBe(false);
    });
  });

  describe('Password Numbers', () => {
    it('should return false if the password does not contain at least 1 number', () => {
      // TODO: Write a test that checks if isValidPassword() returns false when the password does not contain at least 1 number.
      expect(Validate.isValidPassword('NoNumberA')).toBe(false);
      expect(Validate.isValidPassword('NoNumberB')).toBe(false);
    });
  });

  describe('Password Valid', () => {
    it('should return true if password is at least 8 characters long and contains at least 1 uppercase character, lowercase character, and number', () => {
      // TODO: Write a test that checks if isValidPassword() returns true when the password is at least 8 characters long and contains
      // an uppercase, lowercase, and number.
      expect(Validate.isValidPassword('Valid1Pass')).toBe(true);
      expect(Validate.isValidPassword('Another1A')).toBe(true);
    });
  });
});
