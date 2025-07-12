require("dotenv").config();
const mongoose = require("mongoose");
const Task = require("./models/Task");
const User = require("./models/User");
const connectDB = require("./db");

const seed = async () => {
  try {
    await connectDB();
    console.log("MongoDB Connected");

    // Clear previous data
    await Task.deleteMany();
    await User.deleteMany();

    // Create a user first
    const user = await User.create({
      email: "admin@example.com",
      password: "hashedpassword", // You can hash with bcrypt if needed
      role: "admin",
    });

    // Seed some tasks with the created user's _id
    const tasks = [
      {
        title: "Test Task 1",
        description: "This is a test task",
        completed: false,
        owner: user._id,
      },
      {
        title: "Test Task 2",
        description: "Another task",
        completed: true,
        owner: user._id,
      },
    ];

    await Task.insertMany(tasks);
    console.log("Seeding complete ✅");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
