const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const admin=await Admin.findOne({username:req.headers["username"],password:req.headers["password"]}).exec()
    if(admin)
    {
        return next()
    }
    res.status(403).send("Invalid username or password")
}

module.exports = adminMiddleware;