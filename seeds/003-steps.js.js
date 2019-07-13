const faker = require("faker");
const tableName = "STEPS";

const createFakeData = howMuch => ({
  id: 0,
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  how_to_id: Math.floor(Math.random() * (howMuch/2) + 1)
});

exports.seed = async function (knex, Promise) {
  const fakerDataList = [];
  const howMuchData = 50;

  for (let i = 0; i < howMuchData; i++) {
    const fake = createFakeData(howMuchData);
    fake.id = i + 1;
    fakerDataList.push(fake);
  }

  await knex(tableName).insert(fakerDataList);
};
