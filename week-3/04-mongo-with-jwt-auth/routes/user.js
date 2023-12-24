const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    try {
        await User.create(req.body)
        res.status(200).send("User signed up.")    
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/signin', async(req, res) => {
    // Implement user signin logic
    try {
        const user = await User.findOne({username:req.body.username,password:req.body.password}).exec()
        if(user)
        {
            let token =jwt.sign({username:req.body.username},jwtPassword)
            return res.status(200).json({"token":token})
        }
        return res.status(403).send("invalid username or password.")
    } catch (error) {
        res.status(500).send(error)
    }
});


router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        let courses=await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try {
        const courseId=req.params.courseId
        const username = jwt.decode(req.headers['authorization'].split(' ')[1]).username;
        let user=await User.findOne({username})
        user.purchased_courses.push(courseId)
        await user.save()
        res.status(200).send("Course purchased successfully")  
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const username = jwt.decode(req.headers['authorization'].split(' ')[1]).username;
        let user=await User.findOne({username})
        let all_courses=await Course.find()
        let users_courses = all_courses.filter(course=>user.purchased_courses.includes(course._id))
        res.status(200).json({"purchasedCourses":users_courses})  
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

module.exports = router