// const fs = require('fs');      // File System module
// const path = require('path');  // Path module
// const http = require('http');  // HTTP module

const express = require('express');
const path = require('path');
const utils = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello, World! Today's date is ${utils.getCurrentDate()}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

