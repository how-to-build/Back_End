const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById,
  remove,
  update
};

function add(step) {
  return db("STEPS").insert(step);
}

function find() {
  return db("STEPS");
}

function findById(id) {
  return db("STEPS")
    .where({ id })
    .first();
}

function remove(id) {
  return db("STEPS")
    .where({ id })
    .del();
}

function update(id, step) {
  return db("STEPS")
    .where({ id })
    .update(step);
}
