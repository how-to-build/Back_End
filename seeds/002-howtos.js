const faker = require("faker");
const tableName = "HOW_TO";

const createFakeData = howMuch => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  user_id: Math.floor(Math.random() * howMuch + 1)
});

exports.seed = async function(knex, Promise) {
  const fakerDataList = [];
  const howMuchData = 25;

  for (let i = 0; i < howMuchData; i++) {
    const fake = createFakeData(howMuchData);
    fakerDataList.push(fake);
  }

  await knex(tableName).insert(fakerDataList);
};
