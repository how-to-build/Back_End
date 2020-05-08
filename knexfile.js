require("dotenv").config();
const dev = process.env.DB_URL_DEV;
const prod = process.env.DB_URL_PROD;

module.exports = {

  development: {
    client: "pg",
    connection: {
      host: process.env.DB_URL_DEV,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT
    },
    useNullAsDefault: true,
    debug: true
  },


  staging: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
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
    connection: {
      host: prod,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
