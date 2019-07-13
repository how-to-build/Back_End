const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findByUser,
  findById,
  remove,
  update,
  findAllDataById
};

function add(howTo) {
  return db("HOW_TO")
    .insert(howTo)
    .returning("*");
}

function find() {
  return db("HOW_TO");
}

function findByUser(howTo) {
  return db("HOW_TO")
    .where({ howTo })
    .first();
}

async function findById(id) {
  const howTo = await db("HOW_TO")
    .where({ id })
    .first();
  return howTo;
}

async function findAllDataById(id) {
  const howTo = await db("HOW_TO")
    .where({ id })
    .first();
  const comments = await db("COMMENTS").where("how_to_id", id);

  for (let comment in comments) {
    const searchComment = comments[comment].id;
    const replies = await db("REPLIES").where("comment_id", searchComment);
    comments[comment].replies = replies;
  }

  howTo.comments = comments;
  return howTo;
}

function remove(id) {
  return db("HOW_TO")
    .where({ id })
    .del();
}

async function update(id, howTo) {
  const currentData = await findById(id);
  console.log(howTo);
  const updated = { ...currentData, ...howTo };
  console.log(updated);
  return db("HOW_TO")
    .where({ id })
    .update({ ...currentData, howTo });
}
