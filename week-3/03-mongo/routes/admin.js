const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        await Admin.create(req.body)
        res.status(200).send("Admin created successfully")    
    } catch (error) {
        res.status(500).send(error)
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try {
        let course = await Course.create(req.body)
        res.status(200).send({ message: 'Course created successfully', courseId: course._id })    
    } catch (error) {
        res.status(500).send(error)
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        let courses=await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;