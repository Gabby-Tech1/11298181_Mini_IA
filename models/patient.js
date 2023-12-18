const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientID: String,
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyContact: {
    name: String,
    contact: String,
    relationship: String,
  },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
