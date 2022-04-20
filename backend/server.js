const bodyParser = require('body-parser')
require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')

connectDB()

const app = express();

const users = require('./api/routes/users')
const bikes = require('./api/routes/bikeRouter')
const providers = require('./api/routes/providers')
const rentals = require('./api/routes/rentals')

const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/api/users', users)
app.use('/api/bikes', bikes)
app.use('/api/providers', providers)
app.use('/api/rentals', rentals)

// Error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port: ${port}`));


