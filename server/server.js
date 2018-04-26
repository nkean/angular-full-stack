const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(express.static('server/public'));

foodArray = [];

app.get('/food', (req, res) => {
    res.send(foodArray);
});

app.post('/food', (req, res) => {
    console.log(req.body);
    foodArray.push(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});