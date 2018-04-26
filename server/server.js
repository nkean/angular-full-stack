const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

foodArray = [];

app.get('/food', (req, res) => {
    res.send(foodArray);
});



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});