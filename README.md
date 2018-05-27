# node-exercise
time spend: 1h 47min

## Innnstallation
```
$ git clone https://github.com/MrAlekhin/node-exercise.git
$ cd node-exercise
$ npm install
```
## Run
```
$ npm start
```

## Test
```
$ npm run test
```
Output:
```
❯ npm test

> exercise@1.0.0 test /Users/artem/NodeJS/node-exercise
> mocha server/**/*.test.js



Started up at port 3000
  Converts money from one currency to another through history
    ✓ should buy CAD 135.23 on 2017-06-03 day with USD 100 (444ms)
    ✓ should buy CAD 97.85 on 2011-06-03 day with USD 100 (408ms)
    ✓ should buy SEK 4085.03 on 2007-07-12 day with GBP 303 (399ms)
    ✓ should buy PLN 22.01 on 2004-08-07 day with EUR 5 (400ms)
    ✓ should buy TRY 36.35 on 2017-02-09 day with ZAR 132 (402ms)
    ✓ shoul return 400 status if currency is not included


  6 passing (2s)
```
