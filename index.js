const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const colors = require("colors");

const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");

dotenv.config();

// Connecting to mongodb server
connectDB();

// express application
const app = express();
// Body Parser middleware, no need to install body-parser package
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>List of all products</h1>");
});

app.use("/users", userRoutes);
app.use("/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`.cyan);
});
