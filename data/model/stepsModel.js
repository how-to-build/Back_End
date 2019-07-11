const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById,
  remove,
  update
};

function find() {
  return db("STEPS");
}

function findById(id) {
  return db("STEPS")
    .where({ id })
    .first();
}

function remove(id) {
  return db("STEPS").delete(id);
}

function update(id, step) {
  return db("STEPS")
    .where({ id })
    .insert(step);
}
