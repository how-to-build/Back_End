const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig[`${process.env.DB_ENV} || development`])

module.exports = db