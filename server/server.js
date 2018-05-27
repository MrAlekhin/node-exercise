// server.js

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const roundTo = require('round-to');

var { getExchangeRate } = require('./middleware/exchange');

var app = express();

//setup for production
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//gets historical rate and counts the money
app.post('/currency', getExchangeRate, (req, res) => {
  try {
    let body = _.pick(req.body, [
      'date',
      'base_currency',
      'conversion_currency',
      'base_amount'
    ]);

    if (!req.exchange) {
      throw `Cannot exchange to ${body.conversion_currency}`;
    }

    body.conversion_amount = roundTo(req.exchange * body.base_amount, 2);

    res.send(body);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };
