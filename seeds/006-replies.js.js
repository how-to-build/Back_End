const faker = require("faker");
const tableName = "REPLIES";

const createFakeData = howMuch => ({
  reply: faker.lorem.paragraph(),
  comment_id: Math.floor(Math.random() * (howMuch / 2) + 1),
  user_id: Math.floor(Math.random() * howMuch + 1)
});

exports.seed = async function (knex, Promise) {
  const fakerDataList = [];
  const howMuchData = 50;

  for (let i = 0; i < howMuchData; i++) {
    const fake = createFakeData(howMuchData);
    fakerDataList.push(fake);
  }

  await knex(tableName).insert(fakerDataList);
};
