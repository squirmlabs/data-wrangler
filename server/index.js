'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');

// Instantiate Express App
const app = express();

// Using cors
app.use(cors());

// Server constants
const config = require('./config');

// Resources
// const data = require('../data');
// const generateReport = require('./src/modules/generate-report.js');
const report = require('./modules/report.js');

// Public directory contains static files to be served
const staticFilesPath = path.join(__dirname, '../public');

// Instantiate the Express static files middleware
const staticFilesMiddleWare = express.static(staticFilesPath);

// Set root of our website to the public directory
app.use('/', staticFilesMiddleWare);


app.get('/rest/report', (req, res) => {
//   const report = generateReport(data);
  res.json(report);
});

// Starts the server and listens for incoming HTTP requests
app.listen(config.PORT, () => {
  console.log(`Web server listening on port ${config.PORT}!`);
});
