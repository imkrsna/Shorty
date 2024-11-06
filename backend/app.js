// importing modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./services/routes');
const {unknownEndpoint, errorHandler} = require('./services/error');

// creating server
const app = express();

// using frontend
app.use(express.static('dist'));

// setting up morgan
morgan.token('content', (req, res) => JSON.stringify(req.body));

// using middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(":method :url :status :response-time ms - :res[content-length] - :content"));

// setting up routes
app.use('/', router);

// setting up error handler
app.use(unknownEndpoint);
app.use(errorHandler);

// server variables
PORT = process.env.PORT || 3001;

// running server
app.listen(PORT, () => console.log(`server running at '${PORT}'`));