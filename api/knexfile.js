// Update with your config settings.
require("babel-register");

module.exports = {

  development: {
    client: 'pg',
    version: '9.7',
    connection: {
      host : process.env.POSTGRES_HOST || '127.0.0.1',
      user : 'nvwangdaren',
      password : 'shejingbing',
      database : 'ocwahaha'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
