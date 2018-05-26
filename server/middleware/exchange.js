const request = require('request');
const fetch = require('node-fetch');
const _ = require('lodash');

var getExchangeRate = async (req, res, next) => {
  let body = _.pick(req.body, ['date', 'base_currency', 'conversion_currency']);

  const rates = await fetch(
    `https://exchangeratesapi.io/api/${body.date}?base=${body.base_currency}`
  );
  const json = await rates.json();
  req.exchange = _.pick(json.rates, body.conversion_currency)[
    body.conversion_currency
  ];
  next();
};

module.exports = { getExchangeRate };
