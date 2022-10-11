const bodyParser = require('body-parser')
require('dotenv').config()

const express = require('express');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')
const cors = require('cors')

const app = express()

connectDB()
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const users = require('./api/routes/users')
const bikes = require('./api/routes/bikeRouter')
const providers = require('./api/routes/providers')
const rentals = require('./api/routes/rentals')
const auths = require('./api/routes/authRouter')
const privates = require('./api/routes/private')
const categories = require("./api/routes/categories");
const feedbacks = require("./api/routes/feedbacks");

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
app.use("/api/categories", categories);
app.use("/api/feedbacks", feedbacks);

// Error handler (Should be a last piece of middleware)
app.use(errorHandler) 

const server = app.listen(port, () => console.log(`Server is running on port: ${port}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})