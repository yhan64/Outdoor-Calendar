'use strict';

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = (0, _knex2.default)({
  client: 'pg',
  version: '7.0',
  connection: {
    host: '127.0.0.1',
    user: 'nvwangdaren',
    password: 'shejingbing',
    database: 'ocwahaha'
  }
});

// db.schema.createTable('activities', (t) => {
//   t.uuid('id').primary().defaultTo(knex.raw('uudi_generate_v4'));
//   t.timestamp('create_at').defaultTo(knex.raw('now()'));
// })

console.log('after db schema');