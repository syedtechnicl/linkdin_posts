// Importing Express
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
