'use strict';

var express = require('express');
var app = express();
var pgp = require('pg-promise')();
var cn = {
  host: 'db-postgres', //when run the file without docker, change host to localhost to make it work
  port: 5432,
  database: 'ocwahaha',
  user: 'nvwangdaren',
  password: 'shejingbing'
};
var db = pgp(cn);

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