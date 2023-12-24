const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers['authorization'].split(' ')[1]
    try {
        jwt.verify(token,jwtPassword)
        next()
    } catch (error) {
       return res.status(403).send("Invalid token")
    }
}

module.exports = userMiddleware;