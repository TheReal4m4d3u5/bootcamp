import jwt from 'jsonwebtoken';
// checks if the user is allowed to access a particular part of your app by verifying their
// token. If the token is valid, it lets the user proceed; if not, it stops them with an error.
export const authenticateToken = (req, res, next) => {
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
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user;
        return next();
    });
};
