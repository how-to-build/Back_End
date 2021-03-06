const faker = require("faker");
const tableName = "KEY_POINTS";

const createFakeData = howMuch => ({
  description: faker.lorem.paragraph(),
  step_id: Math.floor(Math.random() * (howMuch / 2) + 1)
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
