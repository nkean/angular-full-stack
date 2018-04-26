const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/kitchen';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to: ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`mongoose connection error: ${error}`);
});

router.get('/', (req, res) => {
    res.send(foodArray);
});

router.post('/', (req, res) => {
    console.log(req.body);
    foodArray.push(req.body);
    res.sendStatus(200);
});

module.exports = router;