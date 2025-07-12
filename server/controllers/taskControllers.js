const Task = require("../models/Task");

//POST
exports.createTask = async(req, res) => // Corrected 'requestAnimationFrame' to 'req'
{
    try {
        const task = await Task.create({ ...req.body, owner: req.user.id}); // Corrected 'crete' to 'create' and 'owmer' to 'owner'
        res.status(201).json(task); // Good practice to add a status code for creation
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Failed to create task", error: error.message });
    }
};

exports.getMyTask = async(req, res) => { // Corrected 'getmyTasks' to 'getMyTask' to match taskRoutes.js
    try {
        const tasks = await Task.find({owner: req.user.id});
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching user tasks:", error);
        res.status(500).json({ message: "Failed to fetch user tasks", error: error.message });
    }
}

// GET / API TASKS ALL
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate("owner", "email"); // Corrected 'tak' to 'Task'
        res.json(tasks);
    } catch (error) {
        console.error("Error fetching all tasks:", error);
        res.status(500).json({ message: "Failed to fetch all tasks", error: error.message });
    }
};