const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findByUser,
  findById,
  remove,
  update
};

function add(howTo) {
  return db("HOW_TO")
    .insert(howTo)
    .returning("id");
}

function find() {
  return db("HOW_TO");
}

function findByUser(howTo) {
  return db("HOW_TO")
    .where({ howTo })
    .first();
}

function findById(id) {
  return db("HOW_TO")
    .where({ id })
    .first();
}

function remove(id) {
  return db("HOW_TO").where({ id }).del();
}

function update(id, howTo) {
  return db("HOW_TO")
    .where({ id })
    .insert(howTo);
}
