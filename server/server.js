const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

const foodRouter = require('./routes/food.route');

app.use(bodyParser.json());

app.use(express.static('server/public'));

app.use('/food', foodRouter);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});