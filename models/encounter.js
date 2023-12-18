const mongoose = require("mongoose");

const encounterSchema = new mongoose.Schema({
  patientID: String,
  dateAndTime: Date,
  typeOfEncounter: String,
});

const Encounter = mongoose.model("Encounter", encounterSchema);

module.exports = Encounter;
