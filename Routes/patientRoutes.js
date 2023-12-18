const express = require("express");
const router = express.Router();
const Patient = require('../Models/patient');


router.post("/patients", async (req, res) => {
  try {
    const patient = new Patient(req.body);
    const savedPatient = await patient.save();
    res.json(savedPatient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
