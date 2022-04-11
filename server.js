const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const mongoURI = require('./config/keys').mongoURI;

const app = express();

// 
const users = require('./api/routes/users')
const bikes = require('./api/routes/bikes')
const providers = require('./api/routes/providers')
const rentals = require('./api/routes/rentals')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Database connection
mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000;

// routes
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


