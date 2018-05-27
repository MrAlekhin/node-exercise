// exchange.js

const request = require('request');
const fetch = require('node-fetch');
const _ = require('lodash');

//gets the historical rate
var getExchangeRate = async (req, res, next) => {
  let body = _.pick(req.body, ['date', 'base_currency', 'conversion_currency']);

  //get request with DATE and BASE CURRENCY
  const rates = await fetch(
    `https://exchangeratesapi.io/api/${body.date}?base=${body.base_currency}`
  );

  //convert to JSON
  const json = await rates.json();

  //search for CONVENSION CURRENCY (returns empty if cannot find)
  req.exchange = _.pick(json.rates, body.conversion_currency)[
    body.conversion_currency
  ];
  next();
};

module.exports = { getExchangeRate };
