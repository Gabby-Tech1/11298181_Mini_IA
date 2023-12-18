const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongooseDB connection error:'));

db.once('open',() => {
    console.log("Connected to MongoDB");
});

const patientSchema = new mongoose.Schema({
    patientID: {type: String, required: true},
    surname: {type: String, required: true},
    otherName: {type: String, required: true},
    gender: { type: String, required: true},
    phoneNumber: {type: Number, required: true},
    residentialAddress: {type: String, required: true},
    emergencyName: {type: String, required: true},
    contact: {type: String, required: true},
    relationship: {type: String, required: true},
});

const Patient = mongoose.model('Patient', patientSchema);

app.post('/patient', async (req, res) => {
    try{
        const {
            patientID,
            surname,
            otherName,
            gender,
            phoneNumber,
            residentialAddress,
            emergencyName,
            contact,
            relationship,
        } = req.body;

        const newPatient = new Patient({
            patientID,
            surname,
            otherName,
            gender,
            phoneNumber,
            residentialAddress,
            emergencyName,
            contact,
            relationship,
        });

        await newPatient.save();

        res.status(201).json({
            message: 'Patient registered successfully'
        });
    }

    catch(error) {
        console.log("error");

        res.status(500).json({message: 'Error registering patient'});

    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})