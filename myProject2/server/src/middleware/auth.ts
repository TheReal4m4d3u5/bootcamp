//Request, Response, and NextFunction are brought in from Express to help type-check the request, response, and next function used in middleware.
//jwt is imported from jsonwebtoken to help work with JSON Web Tokens (JWTs), which are used to verify user authentication.
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

//custom TypeScript interface that defines the structure of the JWT payload,
// specifically that it should have a userId and username (both strings). This helps TypeScript know what fields are inside the JWT
interface JwtPayload {
  userId: string;
  username: string;
}


// allows you to add a user property of type JwtPayload to the Express Request object.
// This means that after verifying a token, you can attach the decoded user info to req.user.

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtPayload;
  }
}


// checks if the user is allowed to access a particular part of your app by verifying their
// token. If the token is valid, it lets the user proceed; if not, it stops them with an error.
export const authenticateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  // TODO: verify the token exists and add the user data to the request object

    //looks for the token in the request’s "Authorization" header.
  const authHeader = req.headers['authorization'];
  //If the header exists pulls out the actual token part after the word Bearer
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  // checks if the token is correct and not expired.
  // secret key used to validate the token. If this secret key doesn’t match, the token is considered invalid.
  jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    req.user = user as JwtPayload;
    return next();
  });

};

