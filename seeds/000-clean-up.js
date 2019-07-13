const cleaner = require("knex-cleaner");

const options = {
  mode: "delete",
  ignoreTables: ["knex_migrations", "knex_migrations_lock"]
};

exports.seed = function(knex) {
  return cleaner.clean(knex, options); // cleans all tables and resets the primary keys
};
