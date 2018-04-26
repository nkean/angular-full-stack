const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

app.get('/food', (req, res) => {
    res.send([{name: 'pasta', deliciousness_rating: 9, is_hot: true}]);
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});