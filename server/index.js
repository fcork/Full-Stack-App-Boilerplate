const express = require('express');
const parser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(parser.json())
app.use(parser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist/'));

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});