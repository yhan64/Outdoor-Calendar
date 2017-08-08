// import knex from 'knex';

// const db = knex({
//   client: 'pg',
//   version: '7.0',
//   connection: {
//     host : '127.0.0.1',
//     user : 'nvwangdaren',
//     password : 'shejingbing',
//     database : 'ocwahaha'
//   }
// });


// db.schema.createTable('activities', (t) => {
//   t.uuid('id').primary().defaultTo(knex.raw('uudi_generate_v4'));
//   t.timestamp('create_at').defaultTo(knex.raw('now()'));
// })

// console.log('after db schema');


// var knex = require('knex')({
//   client: 'pg',
//   version: '7.0',
//   connection: {
//     host : '127.0.0.1',
//     user : 'nvwangdaren',
//     password : 'shejingbing',
//     database : 'ocwahaha'
//   }
// });

// knex.schema.createTable('activities', (t) => {
//   t.uuid('id').primary().defaultTo(knex.raw('uudi_generate_v4'));
//   t.timestamp('create_at').defaultTo(knex.raw('now()'));
// })

// knex.raw('select 1+1 as result').then(function () {
//   // there is a valid connection in the pool
//   console.log('------> valid connection')
// });