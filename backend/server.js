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
const auths = require('./api/routes/authRouter')
const privates = require('./api/routes/private')

const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Routes
app.use('/api/users', users)
app.use('/api/bikes', bikes)
app.use('/api/providers', providers)
app.use('/api/rentals', rentals)
app.use('/api/auth', auths)
app.use('/api/private', privates)

// Error handler (Should be a last piece of middleware)
app.use(errorHandler)

const server = app.listen(port, () => console.log(`Server is running on port: ${port}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})