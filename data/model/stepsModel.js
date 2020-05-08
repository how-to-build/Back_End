const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findById,
  remove,
  update
};

function add(how_to_id, steps) {
  const correctSteps = steps.map(step => {
    return {
      ...step,
      how_to_id
    };
  });
  return db("STEPS").insert(correctSteps);
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
