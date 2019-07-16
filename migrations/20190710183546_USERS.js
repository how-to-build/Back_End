const USERS = "USERS";

exports.up = async function(knex) {
  await knex.schema.createTable(USERS, tbl => {
    tbl.increments();
    tbl.string("first_name");
    tbl.string("last_name");
    tbl
      .string("email")
      .notNullable()
      .unique();
    tbl
      .string("username")
      .notNullable()
      .unique();
    tbl.string("password").notNullable();
    tbl
      .string("role")
      .notNullable()
      .defaultTo("general_user");
    tbl
      .string("avatar")
      .notNullable()
      .defaultTo("default");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists(USERS);
};
