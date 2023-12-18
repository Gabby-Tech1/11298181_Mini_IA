const express = require("express");
const router = express.Router();
const Encounter = require("../Models/encounter");


router.post("/encounters", async (req, res) => {
  try {
    const encounter = new Encounter(req.body);
    const savedEncounter = await encounter.save();
    res.json(savedEncounter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
