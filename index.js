const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require('./Data/hotels.json');

app.get('/', (req, res) => {
    res.send('Vromon server is running');
})

app.get('/hotels', (req, res) => {
    res.send(hotels);
})

app.get('/hotels/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const hotel = hotels.find(ht => ht.id === id);
    res.send(hotel);
})

app.listen(port, () => {
    console.log(`Vromon is running on: ${port}`)
})