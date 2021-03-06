const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findByUser,
  findById,
  remove,
  update
};

function add(reply) {
  return db("REPLIES").insert(reply);
}

function find() {
  return db("REPLIES");
}

function findByUser(username) {
  return db("REPLIES")
    .where({ username })
    .first();
}

function findById(id) {
  return db("REPLIES")
    .where({ id })
    .first();
}

function remove(id) {
  return db("REPLIES")
    .where({ id })
    .del();
}

function update(id, reply) {
  return db("REPLIES")
    .where({ id })
    .update(reply);
}
