const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const otpRoutes = require("./routes/otpRoutes");
const connectDB = require("./config/db");
require("dotenv").config();

// Connect to database
connectDB();

// Middleware
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(morgan("combined"));

// Routes
app.use("/api", otpRoutes);

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
