const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json')
const hotelDetails = require('./data/hotelDetails.json')

app.get('/', (req,res) => {

    res.send(`travel guru server is running `)
} )


app.get('/hotel-Categories', (req,res) => {

    res.send(categories)
})

app.get('/category/:id', (req,res) => {
     const id = req.params.id;
    const category_hotel = hotelDetails.filter(hotel => hotel.category_id == id);
    res.send(category_hotel)
  
})

app.get('/hotel', (req, res) => {

  res.send(hotelDetails)
})

app.get('/hotelDetails/:id', (req,res) => {
  const id = req.params.id;
  const selectedHotel = hotelDetails.filter(hotel => hotel.category_id === id)
  console.log(selectedHotel);
  res.send(selectedHotel)
})

app.listen(port,() => {

    console.log(`travel guru running on prot: ${port}`);
})

module.exports = app;