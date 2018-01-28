import express from 'express';
import knex from 'knex';

const db = knex({
  client: 'pg',
  version: '7.0',
  connection: {
    host : '127.0.0.1',
    user : 'nvwangdaren',
    password : 'shejingbing',
    database : 'ocwahaha'
  }
});
const app = express();

app.get('/', function (req, res) {
  // res.send('Hello World!')
  db.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"').then();
  db.schema.createTable('activities', (t) => {
  t.uuid('id').primary().defaultTo(db.raw('uuid_generate_v4()'));
  t.timestamp('created_at').defaultTo(db.raw('now()'));
  t.date('start_date');
  t.date('end_date');
  t.integer('duration');
  t.string('meet_at');
  t.string('dismiss_at');
  t.string('destination');
  t.string('type');
  }).then()
  .then(function (data) {
    res.send('DATA')
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    res.send(error)
    console.log('ERROR:', error)
  })
})

app.listen(3030, function () {
  console.log('Example app listening on port 3030!')
})
