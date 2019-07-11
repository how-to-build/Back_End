const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findByUser,
  findById,
  remove,
  update
};

function add(user) {
  return db("USERS").insert(user)
}

function find() {
  return db("USERS");
}

function findByUser(username) {
  return db("USERS")
    .where({ username })
    .first();
}

function findById(id) {
  return db("USERS")
    .where({ id })
    .first();
}

function remove(id) {
  return db("USERS").delete(id);
}

function update(user) {
  const { id } = user;
  return db("USERS")
    .where({ id })
    .insert(user);
}
