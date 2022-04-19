const bodyParser = require('body-parser')
require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db')

connectDB()

const app = express();

const index = require('./api/routes/index')
const users = require('./api/routes/users')
const bikes = require('./api/routes/bikes')
const providers = require('./api/routes/providers')
const rentals = require('./api/routes/rentals')

const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/api/', index)
app.use('/api/users', users)
app.use('/api/bikes', bikes)
app.use('/api/providers', providers)
app.use('/api/rentals', rentals)

// Error handling
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


