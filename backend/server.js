const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes Middleware
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/goals", require("./routes/goalRoutes"));

// Error Middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server Started on port ${port}`));
