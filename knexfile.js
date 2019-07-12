require("dotenv").config();
const dev = process.env.DB_URL_DEV;
const prod = process.env.DB_URL_PROD;

module.exports = {

  development: {
    client: "pg",
    connection: dev,
    useNullAsDefault: true,
    debug: true
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
    client: 'pg',
    connection: prod,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
