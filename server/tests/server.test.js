const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { converts } = require('./seed/seed');

//check provided units
describe('Converts money from one currency to another through history', () => {
  converts.forEach(function(convert) {
    it(`should buy ${
      convert.conversion_currency
    } ${convert.conversion_amount} on ${convert.date} day with ${convert.base_currency} ${convert.base_amount}`, done => {
      request(app)
        .post('/currency')
        .send(convert)
        .expect(200)
        .expect(res => {
          expect(res.body.conversion_amount).toBeTruthy();
          expect(res.body.conversion_amount).toBe(convert.conversion_amount);
        })
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });

  it('shoul return 400 status if currency is not included', done => {
    request(app)
      .post('/currency')
      .send((converts[0].conversion_currency = 'RUB'))
      .expect(400)
      .expect(done());
  });
});
