const USERS = "USERS";
const HOW_TO = "HOW_TO";

exports.up = async function(knex) {
  await knex.schema.createTable(HOW_TO, tbl => {
    tbl.increments();
    tbl.string("title").notNullable();
    tbl.text("description").notNullable();
    tbl
      .integer("likes")
      .notNullable()
      .defaultTo(0);

    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable(USERS)
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists(HOW_TO);
};
