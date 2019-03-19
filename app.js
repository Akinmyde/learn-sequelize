const { User } = require('./models');

const getAllUser = async () => {
  const users = await User.findAll();
  return console.log('All users:', JSON.stringify(users, null, 1));
};

const createUser = async (firstName, lastName, email) => {
  const user = await User.create({
    firstName,
    lastName,
    email,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return console.log("Jane's auto-generated ID:", user.dataValues);
};

createUser();
getAllUser();
