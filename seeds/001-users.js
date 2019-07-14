const faker = require("faker");
const tableName = "USERS";

const createFakeData = () => ({
  id: 0,
  username: faker.internet.userName(),
  password: "$2b$14$fYrhiq5aovHexi3TUrBLXeeDqIX17qTc5vPVXKzS8SHeRy/Uce0Ri",
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email()
});

exports.seed = async function(knex, Promise) {
  const fakerDataList = [];
  const howMuchData = 50;

  for (let i = 0; i < howMuchData; i++) {
    const fake = createFakeData();
    fake.id = i + 1;
    fakerDataList.push(fake);
  }

  await knex(tableName).insert(fakerDataList);
};
