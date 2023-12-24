// Middleware for handling auth
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers['authorization'].split(' ')[1]
    try {
        jwt.verify(token,jwtPassword)
        next()
    } catch (error) {
       return res.status(403).send("Invalid token")
    }
    
}

module.exports = adminMiddleware;