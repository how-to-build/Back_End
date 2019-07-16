const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findByEmail,
  findById,
  remove,
  update
};

function add(user) {
  return (test = db("USERS").insert(user));
}

function find() {
  return db("USERS");
}

function findByEmail(email) {
  return db("USERS")
    .where({ email })
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

async function update(id, user) {
  const currentInfo = await findById(id);

  return db("USERS")
    .where({ id })
    .update({ ...currentInfo, ...user })
    .returning("*");
}
