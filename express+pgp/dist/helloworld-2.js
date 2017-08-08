'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _pgPromise = require('pg-promise');

var _pgPromise2 = _interopRequireDefault(_pgPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cn = {
  host: 'db-postgres', //when run the file without docker, change host to localhost to make it work
  port: 5432,
  database: 'ocwahaha',
  user: 'nvwangdaren',
  password: 'shejingbing'
};

var db = (0, _pgPromise2.default)(cn);
var app = (0, _express2.default)();

app.get('/', function (req, res) {
  // res.send('Hello World!')
  db.one('SELECT $1 AS value', 123).then(function (data) {
    res.send('DATA');
    console.log('DATA:', data.value);
  }).catch(function (error) {
    res.send('ERROR');
    console.log('ERROR:', error);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});