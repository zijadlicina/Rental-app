const express = require('express');
const mongoose = require('mongoose');
const mongoURI = require('./config/keys').mongoURI;

const app = express();

// Database connection
mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err))

const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server is running on port: ${port}`));


