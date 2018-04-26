const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/kitchen';
const Food = require('../models/food.schema');

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to: ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`mongoose connection error: ${error}`);
});

router.get('/', (req, res) => {
    Food.find({})
        .then((dataBack) => {
            console.log(`data from database: ${dataBack}`);
            res.send(dataBack);
        })
        .catch((error) => {
            console.log(`error with Food.find: ${error}`);
            res.sendStatus(200);
        })
});

router.post('/', (req, res) => {
    Food.create(req.body)
        .then((response) => {
            console.log(response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error with Food.create: ${error}`);
            res.sendStatus(200);
        })
});

module.exports = router;