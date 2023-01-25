const mongoose = require('mongoose');
const express = require('express');
const app = express();
const genres = require('./routes/genres');
const customers = require('./routes/customers');

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

mongoose.connect('mongodb://localhost/MovieRentalApp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port} ...`));