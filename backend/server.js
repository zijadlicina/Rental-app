const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

const index = require('./api/routes/index')
const users = require('./api/routes/users')
const bikes = require('./api/routes/bikes')
const providers = require('./api/routes/providers')
const rentals = require('./api/routes/rentals')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Database connection
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000;

// routes
app.use('/api/', index)
app.use('/api/users', users)
app.use('/api/bikes', bikes)
app.use('/api/providers', providers)
app.use('/api/rentals', rentals)

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

app.listen(port, () => console.log(`Server is running on port: ${port}`));


