const express = require("express");
const { createTask, getMyTask, getAllTasks } = require("../controllers/taskControllers");
const{ protect, authorize } = require("../middleware/auth");
const router = express.Router();


router.post("/", protect,createTask);
router.get("/me", protect, getMyTask);
router.get("/all", protect, authorize(["admin"]),getAllTasks);

module.exports = router;