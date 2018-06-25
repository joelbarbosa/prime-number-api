'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  console.log(`Hello Test`);
  res.send('Hello world Show\n');
});

app.listen(PORT, HOST);
