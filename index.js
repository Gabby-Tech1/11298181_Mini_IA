const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const patientRoutes = require("./routes/patientRoutes");
const encounterRoutes = require("./routes/encounterRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});


app.use("/api", patientRoutes);
app.use("/api", encounterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
