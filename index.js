// Import required modules
const express = require("express");
const app = express();
const port = process.env.PORT || 1000;
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkforauthcookie } = require("./middleware/authentication");

// Load environment variables
require("dotenv").config();

// Database connection
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Models & Routes
const Blog = require("./models/blog");
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

// Middleware
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // For JSON request support
app.use(cookieParser()); // Proper cookie parsing
app.use(checkforauthcookie("token")); // Auth middleware
app.use(express.static(path.resolve("./public"))); // Static files

// Routes
app.get("/", async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    res.render("home", {
      user: req.user,
      blogs: allBlogs,
    });
  } catch (err) {
    console.error("❌ Error fetching blogs:", err);
    res.status(500).send("Server Error");
  }
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
