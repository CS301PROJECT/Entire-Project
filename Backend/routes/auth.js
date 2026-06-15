const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-this";

// Sign Up Route
router.post("/signup", async (req, res) => {
  try {
    console.log("📝 Signup request received:", req.body);

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const user = new User({
      fullName,
      email,
      password,
    });

    await user.save();
    console.log("✅ User saved successfully!");

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        gameProgress: user.gameProgress,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error during signup" });
  }
});

// Login Route - UPDATED with better error messages
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("🔐 Login attempt for:", email);

    // Find user by email
    const user = await User.findOne({ email });

    // Check if email exists
    if (!user) {
      console.log("❌ Email not found:", email);
      return res.status(401).json({
        message: "Not a registered account",
      });
    }

    // Check password
    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      console.log("❌ Invalid password for:", email);
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    console.log("✅ Login successful for:", email);

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        gameProgress: user.gameProgress,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Get user progress
router.get("/progress/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("gameProgress");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.gameProgress);
  } catch (error) {
    res.status(500).json({ message: "Error fetching progress" });
  }
});

// Update user progress
router.put("/progress/:userId", async (req, res) => {
  try {
    const {
      compliance,
      money,
      scenarioIndex,
      lastProfession,
      completedScenarios,
    } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.userId,
      {
        "gameProgress.compliance": compliance,
        "gameProgress.money": money,
        "gameProgress.scenarioIndex": scenarioIndex,
        "gameProgress.lastProfession": lastProfession,
        "gameProgress.completedScenarios": completedScenarios,
        "gameProgress.lastPlayed": Date.now(),
      },
      { new: true },
    ).select("gameProgress");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.gameProgress);
  } catch (error) {
    console.error("Error updating progress:", error);
    res.status(500).json({ message: "Error updating progress" });
  }
});

module.exports = router;
